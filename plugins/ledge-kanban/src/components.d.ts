/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { members, output, } from "./components/interfaces";
export namespace Components {
    interface LedgeKanban {
        "bins": string;
        "due": string;
    }
    interface OceBin {
        "cards": Array<any>;
        "due": string;
        "note": string;
        "outputs": Array<output>;
        "title": string;
    }
    interface OceCard {
        "action": any;
        "due": string;
        "members": Array<members>;
        "note": string;
    }
    interface OceModal {
        "data": any;
    }
    interface OceOutput {
        "outputs": Array<output>;
    }
}
declare global {
    interface HTMLLedgeKanbanElement extends Components.LedgeKanban, HTMLStencilElement {
    }
    var HTMLLedgeKanbanElement: {
        prototype: HTMLLedgeKanbanElement;
        new (): HTMLLedgeKanbanElement;
    };
    interface HTMLOceBinElement extends Components.OceBin, HTMLStencilElement {
    }
    var HTMLOceBinElement: {
        prototype: HTMLOceBinElement;
        new (): HTMLOceBinElement;
    };
    interface HTMLOceCardElement extends Components.OceCard, HTMLStencilElement {
    }
    var HTMLOceCardElement: {
        prototype: HTMLOceCardElement;
        new (): HTMLOceCardElement;
    };
    interface HTMLOceModalElement extends Components.OceModal, HTMLStencilElement {
    }
    var HTMLOceModalElement: {
        prototype: HTMLOceModalElement;
        new (): HTMLOceModalElement;
    };
    interface HTMLOceOutputElement extends Components.OceOutput, HTMLStencilElement {
    }
    var HTMLOceOutputElement: {
        prototype: HTMLOceOutputElement;
        new (): HTMLOceOutputElement;
    };
    interface HTMLElementTagNameMap {
        "ledge-kanban": HTMLLedgeKanbanElement;
        "oce-bin": HTMLOceBinElement;
        "oce-card": HTMLOceCardElement;
        "oce-modal": HTMLOceModalElement;
        "oce-output": HTMLOceOutputElement;
    }
}
declare namespace LocalJSX {
    interface LedgeKanban {
        "bins"?: string;
        "due"?: string;
    }
    interface OceBin {
        "cards"?: Array<any>;
        "due"?: string;
        "note"?: string;
        "outputs"?: Array<output>;
        "title"?: string;
    }
    interface OceCard {
        "action"?: any;
        "due"?: string;
        "members"?: Array<members>;
        "note"?: string;
    }
    interface OceModal {
        "data"?: any;
    }
    interface OceOutput {
        "outputs"?: Array<output>;
    }
    interface IntrinsicElements {
        "ledge-kanban": LedgeKanban;
        "oce-bin": OceBin;
        "oce-card": OceCard;
        "oce-modal": OceModal;
        "oce-output": OceOutput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ledge-kanban": LocalJSX.LedgeKanban & JSXBase.HTMLAttributes<HTMLLedgeKanbanElement>;
            "oce-bin": LocalJSX.OceBin & JSXBase.HTMLAttributes<HTMLOceBinElement>;
            "oce-card": LocalJSX.OceCard & JSXBase.HTMLAttributes<HTMLOceCardElement>;
            "oce-modal": LocalJSX.OceModal & JSXBase.HTMLAttributes<HTMLOceModalElement>;
            "oce-output": LocalJSX.OceOutput & JSXBase.HTMLAttributes<HTMLOceOutputElement>;
        }
    }
}
