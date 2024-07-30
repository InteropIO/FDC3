Feature: Relaying Broadcast messages

  Background:
    Given A newly instantiated FDC3 Server
    And "App1/a1" is opened
    And "App2/a2" is opened
  # Scenario: Broadcast message to no-one
  #   When "App1/a1" broadcasts "fdc3.instrument" on "channel1"
  #   Then messaging will have outgoing posts
  #     | msg.source.AppId |
  #   And messaging will have 0 posts

  Scenario: Broadcast message sent to one listener
    When "App2/a2" adds a context listener on "channel1" with type "fdc3.instrument"
    And "App1/a1" broadcasts "fdc3.instrument" on "channel1"
    Then messaging will have outgoing posts
      | msg.meta.source.appId | msg.meta.source.instanceId | msg.payload.context.type | msg.meta.destination.appId | msg.meta.destination.instanceId |
      | App1                  | a1                         | fdc3.instrument          | App2                       | a2                              |
  # Scenario: Broadcast message sent but listener has unsubscribed
  #   When "App2/a2" adds a context listener on "channel1" with type "fdc3.instrument"
  #   And "App2/a2" removes context listener on "channel1" with type "fdc3.instrument"
  #   And "App1/a1" broadcasts "fdc3.instrument" on "channel1"
  #   Then messaging will have outgoing posts
  #     | msg.source.AppId | msg.source.instanceId | msg.payload.context.type |

  Scenario: Handle channel state synchronisation for new apps
    When "App1/a1" broadcasts "fdc3.instrument" on "channel1"
    And "App1/a1" broadcasts "fdc3.instrument" on "channel1"
    And "App2/a2" sends hello
    Then messaging will have outgoing posts
      | msg.type  | msg.payload.requestedName | msg.payload.channelsState['channel1'].length | msg.payload.channelsState['channel1'][0].type |
      | handshake | cucumber-fdc3-server      |                                            1 | fdc3.instrument                               |

  Scenario: Adding a listener to a user channel replays Context
        Although the message is sent before the listener is added, history from the channel will get replayed

    Given "resultHandler" pipes context to "contexts"
    When messaging receives "{instrumentMessageOne}"
    And messaging receives "{countryMessageOne}"
    And I call "{api}" with "joinUserChannel" with parameter "one"
    And I call "{api}" with "addContextListener" with parameters "fdc3.instrument" and "{resultHandler}"
    Then "{contexts}" is an array of objects with the following contents
      | id.ticker | type            | name  |
      | AAPL      | fdc3.instrument | Apple |

  Scenario: Joining a user channel replays Context to typed listeners
        Although the message is sent before the channel is joined, history from the channel will get replayed
        to the listener

    Given "resultHandler" pipes context to "contexts"
    When messaging receives "{instrumentMessageOne}"
    And I call "{api}" with "addContextListener" with parameters "fdc3.instrument" and "{resultHandler}"
    And I call "{api}" with "joinUserChannel" with parameter "one"
    Then "{contexts}" is an array of objects with the following contents
      | id.ticker | type            | name  |
      | AAPL      | fdc3.instrument | Apple |
