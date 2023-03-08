$(document).ready(function(){
    
    $.ajax({
        type:"POST",
        url:`http://127.0.0.1:8000/job_details/`,
        data:{
            "link":localStorage.getItem("link")
        },
        success:function(resp){
            console.log(resp)
            $(".comp_logo").html(`<b>${resp.company_name}</b>`)
            $("#comp_logo2").text(`${resp.company_name}`)
            $("#time").text(`${resp.posted}`)
            $("#nature").text(`${resp.job_nature}`)
            $(".job-heading").html(`<h6>${resp.job_title}</h6>`)
            $("#_summary").text(`${resp.job_summary}`)
            $("#_apply_link").html(`<a href="${localStorage.getItem("link")}" class="btn btn-primary btn-sm">Apply Now</a>`)
            $("#apply_link").html(`<a href="${localStorage.getItem("link")}" class="btn btn-primary btn-sm">Apply Now</a>`)
            let Responsiblities=resp.responsibility
            Responsiblities.forEach(item => {
                document.getElementById("responsiblity").innerHTML +=
                `
                <p><li>${item}</li>
                `
            });
            
        },
        error:function(er){
            console.log(err)
        }
    })


})