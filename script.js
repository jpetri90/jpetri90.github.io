function renderTemplate(templateId, targetId, dataObj) {
    var source = $('#'+templateId).html();
    var template = Handlebars.compile(source);
    var html = template(dataObj);
    $('#'+targetId).html(html);
}

renderTemplate('work_experience_template', 'content_work_experience_template', workExperience);

$(function () {
    $('#js-footer-year').html($('#js-footer-year').html() + new Date().getFullYear());
});

