// Written by vq9o.
// Copyright 2022 RAMPAGE Interactive

// written to be as simple as possible for newbies, additional features in the future.

function CreateAlertId(prefix) {
    return Math.random().toString(36).replace('0.', prefix || '');
}

function HideAlert(id) {
    $("#" + id).fadeOut();
}

function CreateAlert(MessageBody = "Hello World", Position = "bottom", BackgroundColor = "dark", ButtonTextColor = "blue", DismissButtonText = "OK", CustomStyle, CustomTextStyle) {
    var id = CreateAlertId("rampagesnackbaralerts_");
    var style;
    var textstyle;

    const validPositions = ["top", "bottom"];
    const validBGColors = {
        "light": "#e8e8e8",
        "dark": "#232427",
        "black": "#0a0a0a",
        "grey": "#2e2e2e",
        "danger": "#ff2b2b"
    };
    const validTextColors = {
        "light": "#e8e8e8",
        "black": "#0a0a0a",
        "grey": "#2e2e2e",
        "blue": "#4287f5",
    };


    if (!validPositions.includes(Position)) throw "Invalid Snackbar alert position.";
    if (!validBGColors[BackgroundColor]) throw "Invalid Snackbar alert background color.";
    if (!validTextColors[ButtonTextColor]) throw "Invalid Snackbar alert button text color.";

    if (!CustomStyle) {
        style = 'background-color: ' + validBGColors[BackgroundColor] + ';';
    } else {
        style = CustomStyle;
    }

    if (!CustomTextStyle) {
        textstyle = 'color: ' + validTextColors[ButtonTextColor] + ';';
    } else {
        textstyle = CustomTextStyle;
    }

    $("#snackbar-" + Position).append(
        '<div style="' + style + ' display: none;" id="' + id + '" role="alertdialog" class="snackbar is-bottom"><div class="text">' +
        MessageBody +
        '</div><div class="action" style="' + textstyle + '"><button style="' + textstyle + '" class="rampagesnackbutton" onClick="HideAlert(\'' + id +
        '\')">' + DismissButtonText + '</button></div></div>'
    );

    $("#" + id).fadeIn();
}