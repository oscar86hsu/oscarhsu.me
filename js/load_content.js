var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

var lang = getUrlParameter('lang');

if(lang == "cht")
{
    var file_name = "lang/cht.json";
    $("#lang_link").html("English");
    $("#lang_link").attr("href", "index.html?lang=en");
    $("#resume_file").attr("href", "files/HungHaoHsuResumeCHT.pdf");
    $(".about-text").html("關 於 我");
    $(".experience-text").html("經 歷");
    $(".skills-text").html("技 能");
    $(".certifications-text").html("證 照");
    $(".education-text").html("學 歷");
    $(".interests-text").html("興 趣");
    $(".specialty-text").html("專長");
    $(".lang-and-tools-text").html("程式語言及工具");
}
else
{
    var file_name = "lang/en.json";
    $("#lang_link").html("中文");
    $("#lang_link").attr("href", "index.html?lang=cht");
    $("#resume_file").attr("href", "files/HungHaoHsuResumeEN.pdf");
    $(".about-text").html("About");
    $(".experience-text").html("Experience");
    $(".skills-text").html("Skills");
    $(".certifications-text").html("Certifications");
    $(".education-text").html("Education");
    $(".interests-text").html("Interests");
    $(".specialty-text").html("Specialty");
    $(".lang-and-tools-text").html("Programming Languages &amp; Tools");
}

$.getJSON(file_name, function (content) {
    $("#name").html(content.first_name + ' <span class="text-primary">' + content.last_name + '</span>')
    $("#profile_text").text(content.profile_text);
    
    $.each(content.experience, function (index, value) {
        job_html = '<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">';
        job_html += '<div class="resume-content">';
        job_html += '<h3 class="mb-0">' + value.job_title + '</h3>';
        job_html += '<div class="subheading mb-3">' + value.company + '</div>';
        job_html += '<ul>';
        $.each(value.tasks, function (task_index, task_value) {
            job_html += '<li>' + task_value + '</li>';
        })
        job_html += '</ul></div>';
        job_html += '<div class="resume-date text-md-right"><span class="text-primary">' + value.date + '</span></div>';
        job_html += '</div>';
        $("#experience-content").append(job_html);
    })

    $.each(content.certifications, function (index, value) {
        $("#certifications-content").append('<li><i class="fa-li fas fa-certificate text-warning"></i>' + value + '</li>');
    })

    $.each(content.specialty, function (index, value) {
        $("#specialty-content").append('<li><i class="fa-li fa fa-check"></i>' + value + '</li>');
    })

    $.each(content.education, function (index, value) {
        edu_html = '<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">';
        edu_html += '<div class="resume-content">';
        edu_html += '<h3 class="mb-0">' + value.school + '</h3>';
        edu_html += '<div class="subheading mb-3">' + value.program + '</div>';
        edu_html += '</div>';
        edu_html += '<div class="resume-date text-md-right">';
        edu_html += '<span class="text-primary">' + value.date + '</span>';
        edu_html += '</div></div>';
        $("#education-content").append(edu_html);
    })

    $("#interest_text").text(content.interest_text);
});
