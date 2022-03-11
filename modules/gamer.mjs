export class Color {
    constructor(code, emoji, class_css) {
        this.code = code;
        this.emoji = emoji;
        this.class = class_css;
    }
}

export const whiteToken = new Color("-", "⚪", "white-token");
export const redToken = new Color("R", "🔴", "red-token");
export const yellowToken = new Color("Y", "🟡", "yellow-token");

export class Gamer {
    constructor(firstName, token) {
        this.firstName = firstName;
        this.token = token;
    }
}

const gamer1 = new Gamer("", redToken);
const gamer2 = new Gamer("", yellowToken);

export const ALIGNR="RRRR";
export const ALIGNY="YYYY";
 

