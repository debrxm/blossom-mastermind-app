export const primaryColor = "#cd9931";
export const secondaryColor = "#dddcdb";
export const inputColor = "#eaeffd";
export const subbuttonColor = "2bae76";
export const lightGray = "#97989A";
export const lightBrown = "#CD9931";
export const green = "#2BAE76";
export const dark = "#0D0D0D";
export const skyblue = "#EAEFFD";
export const red = "#FF0000";



export const MoneyFormat = (labelValue) => {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

        ? Math.abs(Number(labelValue)) / 1.0e+9 + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(labelValue)) >= 1.0e+6

            ? Math.abs(Number(labelValue)) / 1.0e+6 + "M"
            // Three Zeroes for Thousands
            : Math.abs(Number(labelValue)) >= 1.0e+3

                ? Math.abs(Number(labelValue)) / 1.0e+3 + "K"

                : Math.abs(Number(labelValue));



}