# Snackbar-Alerts
Snackbar Alerts similar to MUI made with Vanilla Javascript &amp; Bulma
# Install
Add the CSS Stylesheet and Javascript to your header
```html
    <link href="https://cdn.rampage.place/snackbar.css" rel="stylesheet">
    <script src="https://cdn.rampage.place/snackbar.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
```

**jQuery** is required.
# Documentation
## Usage Example
```html
<!DOCTYPE html>
<html>

<head>
    <title>Snackbar Demo</title>
    <meta name="description" content="Example Snackbar Notification System by RAMPAGE Interactive">
    <link href="../src/main.css" rel="stylesheet">
    <script src="../src/alets.js"></script>
</head>

<body>
    <div id="snackbar-top" class="notices is-top"></div>
    <div id="snackbar-bottom" class="notices is-bottom"></div>
</body>

<script>
    CreateAlert("Default Example");
</script>

</html>
```
## CreateAlertId
```
CreateAlertId(prefix)
```
Generates alert id, used for CreateAlert.

**CreateAlertId** returns void.
## HideAlert
```
HideAlert(id)
```
Hide alert with that id.

**HideAlert** returns void.
## CreateAlert
```
CreateAlert(MessageBody, Position, BackgroundColor, ButtonTextColor, DismissButtonText, CustomStyle, CustomTextStyle)
```

#### MessageBody: String
Message shown

#### Position: String
Position where alert is shown. Valid options are: top, bottom.

#### BackgroundColor: String
Message background color. Valid options are:
```json
{
        "light": "#e8e8e8",
        "dark": "#232427",
        "black": "#0a0a0a",
        "grey": "#2e2e2e",
        "danger": "#ff2b2b"
};
```

#### ButtonTextColor: String
Button text color. Valid options are:
```json
{
        "light": "#e8e8e8",
        "black": "#0a0a0a",
        "grey": "#2e2e2e",
        "blue": "#4287f5",
};
```

#### CustomStyle: String
Custom styles for background, overwrites/disables BackgroundColor.
#### CustomTextStyle: String
Custom styles for button, overwrites/disables ButtonTextColor.

**CreateAlert** returns AlertId which can be used to HideAlert with HideAlert(id)
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
## License
[MIT](https://choosealicense.com/licenses/mit/)