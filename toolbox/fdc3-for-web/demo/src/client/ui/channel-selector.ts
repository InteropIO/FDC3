import { BrowserTypes } from "@kite9/fdc3-schema";
import { FDC3_USER_INTERFACE_CHANNEL_SELECTED_TYPE, FDC3_USER_INTERFACE_CHANNELS_TYPE, FDC3_USER_INTERFACE_HANDSHAKE_TYPE, FDC3_USER_INTERFACE_HELLO_TYPE, FDC3_USER_INTERFACE_RESTYLE_TYPE } from "@kite9/fdc3-schema/generated/api/BrowserTypes";
import { dragElement } from "./drag";

type IframeChannels = BrowserTypes.Fdc3UserInterfaceChannels
type IframeRestyle = BrowserTypes.Fdc3UserInterfaceRestyle
type IframeHello = BrowserTypes.Fdc3UserInterfaceHello

var channels: any[] = []
var channelId: string | null = null


export const DEFAULT_COLLAPSED_CSS = {
    width: "50px",
    height: "50px",
    position: "fixed",
    zIndex: "1000",
}

const DEFAULT_EXPANDED_CSS = {
    width: "450px",
    height: "600px",
    position: "fixed",
    zIndex: "1000",
    transition: "all 0.5s ease-out allow-discrete"
}

export type Position = {
    left: string,
    top: string
}


const position: Position = {
    left: "10px",
    top: "10px",
}

window.addEventListener("load", () => {
    const parent = window.parent;
    const logo = document.getElementById("logo")!!
    const close = document.getElementById("close")!!

    const mc = new MessageChannel();
    const myPort = mc.port1
    myPort.start()


    parent.postMessage({
        type: FDC3_USER_INTERFACE_HELLO_TYPE,
        payload: {
            initialCSS: {
                ...DEFAULT_COLLAPSED_CSS, ...position
            },
            implementationDetails: "Demo Channel Selector v1.0"
        }
    } as any as IframeHello, "*", [mc.port2]);

    function changeSize(expanded: boolean) {
        document.body.setAttribute("data-expanded", "" + expanded);
        myPort.postMessage({ type: FDC3_USER_INTERFACE_RESTYLE_TYPE, payload: { updatedCSS: expanded ? { ...DEFAULT_EXPANDED_CSS, ...position } : { ...DEFAULT_COLLAPSED_CSS, ...position } } } as IframeRestyle)
    }

    myPort.addEventListener("message", (e) => {
        console.log(e.data.type)
        if (e.data.type == FDC3_USER_INTERFACE_HANDSHAKE_TYPE) {
            // ok, port is ready, send the iframe position detials
            myPort.postMessage({ type: FDC3_USER_INTERFACE_RESTYLE_TYPE, payload: { updatedCSS: { ...DEFAULT_COLLAPSED_CSS, ...position } } } as IframeRestyle)
        } else if (e.data.type == FDC3_USER_INTERFACE_CHANNELS_TYPE) {
            const details = e.data as IframeChannels
            console.log(JSON.stringify("CHANNEL DETAILS: " + JSON.stringify(details)))
            channels = details.payload.userChannels
            channelId = details.payload.selected

            const selectedColor = (channelId ? (channels.find(c => c.id == channelId)?.displayMetadata?.color) : null) ?? 'white'
            logo.style.backgroundColor = selectedColor
        }
    })


    dragElement(logo, myPort, position) /*, () => {
        list.innerHTML = ''
        channels.forEach(channel => {

            const li = document.createElement("li")
            li.style.backgroundColor = channel.displayMetadata.color
            const a = document.createElement("a")
            const description = document.createElement("em")
            description.textContent = channel.displayMetadata.name = (channel.id == channelId ? " CURRENT CHANNEL " : "")
            a.textContent = channel.id

            li.appendChild(a)
            li.appendChild(description)
            list.appendChild(li)
            a.setAttribute("href", "#")
            a.onclick = () => {
                changeSize(false)
                channelId = channel.id
                myPort.postMessage({ type: FDC3_USER_INTERFACE_CHANNEL_SELECTED_TYPE, payload: { selected: channel.id } })
            }
        })

        // ask the parent container to increase the window size
        changeSize(true)
    }) */

    close.addEventListener("click", () => {
        changeSize(false)
    })


})