/**
 * Set of colors used in the project.
 */
export const COLORS = ["#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777"];


/**
 * Set of shape options available for the user to build their designs.
 */
export const shapeElements = [
    {
        icon: "/assets/rectangle.svg",
        name: "Rectangle",
        value: "rectangle",
    },
    {
        icon: "/assets/circle.svg",
        name: "Circle",
        value: "circle",
    },
    {
        icon: "/assets/triangle.svg",
        name: "Triangle",
        value: "triangle",
    },
    {
        icon: "/assets/line.svg",
        name: "Line",
        value: "line",
    },
    {
        icon: "/assets/image.svg",
        name: "Image",
        value: "image",
    },
    {
        icon: "/assets/freeform.svg",
        name: "Free drawing",
        value: "freeform",
    },
];


/**
 * Set of element options available for the user in the navbar section of the window.
 */
export const navbarOptions = [
    {
        icon: "/assets/select.svg",
        name: "Select",
        value: "select",
    },
    {
        icon: "/assets/rectangle.svg",
        name: "Rectangle",
        value: shapeElements,
    },
    {
        icon: "/assets/text.svg",
        value: "Text",
        name: "text",
    },
    {
        icon: "/assets/delete.svg",
        value: "Delete",
        name: "delete",
    },
    {
        icon: "/assets/reset.svg",
        value: "Reset",
        name: "reset",
    },
    {
        icon: "/assets/comments.svg",
        value: "Comments",
        name: "comments",
    },
];


/**
 * Set the default element used by the user.
 */
export const defaultNavbarOption = {
    icon: "/assets/select.svg",
    name: "Select",
    value: "select",
};


/**
 * Set the icon properties to move and overlap the elements.
 */
export const directionOptions = [
    { 
        label: "Bring to front", 
        value: "Front", 
        icon: "/assets/front.svg" 
    },
    { 
        label: "Send to back", 
        value: "Back", 
        icon: "/assets/back.svg" 
    },
];

/**
 * The set of font values availables for the website.
 */
export const fontFamilyOptions = [
    { 
        value: "Helvetica", 
        label: "Helvetica" 
    },
    { 
        value: "Times New Roman", 
        label: "Times New Roman" 
    },
    { 
        value: "Comic Sans MS", 
        label: "Comic Sans MS" 
    },
    { 
        value: "Brush Script MT", 
        label: "Brush Script MT" 
    },
];

/**
 * The set of font size values availables for the user to build their design
 */
export const fontSizeOptions = [
    {
        value: "10",
        label: "10",
    },
    {
        value: "12",
        label: "12",
    },
    {
        value: "14",
        label: "14",
    },
    {
        value: "16",
        label: "16",
    },
    {
        value: "18",
        label: "18",
    },
    {
        value: "20",
        label: "20",
    },
    {
        value: "22",
        label: "22",
    },
    {
        value: "24",
        label: "24",
    },
    {
        value: "26",
        label: "26",
    },
    {
        value: "28",
        label: "28",
    },
    {
        value: "30",
        label: "30",
    },
    {
        value: "32",
        label: "32",
    },
    {
        value: "34",
        label: "34",
    },
    {
        value: "36",
        label: "36",
    },
];


/**
 * The set of font weight values availables for the user to build their design
 */
export const fontWeightOptions = [
    {
        value: "400",
        label: "Normal",
    },
    {
        value: "500",
        label: "Semibold",
    },
    {
        value: "600",
        label: "Bold",
    },
];


/**
 * Set the align option values availables for the user to build their design
 */
export const alignmentOptions = [
    {
        value: "left",
        label: "Align left",
        icon: "/assets/align-left.svg"
    },
    {
        value: "horizontalCenter",
        label: "Align Horizontal Center",
        icon: "/assets/align-horizontal-center.svg",
    },
    {
        value: "right",
        label: "Align right",
        icon: "/assets/align-right.svg"
    },
    {
        value: "top",
        label: "Align top",
        icon: "/assets/align-top.svg"
    },
    {
        value: "verticalCenter",
        label: "Align vertical center",
        icon: "/assets/align-vertical-center.svg",
    },
    {
        value: "bottom",
        label: "Align bottom",
        icon: "/assets/align-bottom.svg"
    },
];

/**
 * Set the shortcuts availables for the user in the window
 */
export const shortcuts = [
    {
        key: "1",
        name: "Chat",
        shortcut: "/",
    },
    {
        key: "2",
        name: "Undo",
        shortcut: "Ctrl + Z",
    },
    {
        key: "3",
        name: "Redo",
        shortcut: "Ctrl + Y",
    },
    {
        key: "4",
        name: "Reactions",
        shortcut: "E",
    },
];