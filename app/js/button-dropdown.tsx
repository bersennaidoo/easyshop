import $ from "jquery"

export const ButtonDropdown = () => {
    var $dropdownToggle = $(".c-header__btn-dropdown")
    var $dropdownList = $(".c-header__list-frame")
    var isOpen = false

    $($dropdownToggle).on("click", function(e) {
        e.preventDefault()
        if (isOpen === false) {
            $($dropdownList).css("display", "block")
            isOpen = true
        } else {
            $($dropdownList).css({ "display": "none" })
            isOpen = false
        }
    })
}