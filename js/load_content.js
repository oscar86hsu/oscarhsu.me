$.getJSON("lang/en.json", function (content) {
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
        $("#experience").append(job_html);
    })

    $.each(content.certifications, function (index, value) {
        $("#certifications").append('<li><i class="fa-li fas fa-certificate text-warning"></i>' + value + '</li>');
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
        $("#education").append(edu_html);
    })

    $("#interest_text").text(content.interest_text);
});
