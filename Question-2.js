const is_username_valid = (_input) => {
    var RegexPattern = new RegExp(/^[^0-9][A-Za-z0-9]{5,9}$/)
    var isMatch = _input.match(RegexPattern) ? "TRUE" : "FALSE"
    console.log(isMatch)
}

const is_password_valid = (_input) => {
    var RegexPattern = new RegExp(/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[=]).*$/)
    var isMatch = _input.match(RegexPattern) ? "TRUE" : "FALSE"
    console.log(isMatch)
}

is_username_valid("Xrutaf888")
is_username_valid("1Diana")
is_password_valid("passW0rd=")
is_password_valid("C0d3YourFuture!#")