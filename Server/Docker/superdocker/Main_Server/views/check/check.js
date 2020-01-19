const key_list = ['db', '11st', 'joongna'];
$(document).ready(() => {
    key_list.map(key =>
        $(`#${key}_button`).on('click', e => {
            checkServer(key);
        }),
    );
});

const checkServer = key => {
    $.ajax({
        url: key,
        success: res => $(`#${key}_code`).text(res),
    });
};
