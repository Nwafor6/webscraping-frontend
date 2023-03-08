$(document).ready(function(){
    //  Gettin job lists
    let JobTitle=[]
    let JobNnature=[]
    let JobLocation=[]
    $.ajax({
        type:"GET",
        url:"http://127.0.0.1:8000/jobs/",
        success:function(resp){
            $(".loader").css("display", "none")
            for(job in resp.data){
                document.getElementById("job_lists_holder").innerHTML +=
                `
                <div class="col-lg-4 col-md-6 col-sm-12 mt-2 my_card" >
                <div class="list_card-main">
                  <div class="time_nature"><span class="days_ago">${resp.data[job].posted}</span> <span class="days_ago">.</span><span class="days_ago">${resp.data[job].job_nature}</span></div>
                  <div class="job-heading"><h5>${resp.data[job].job_title}</h5></div>
                  <div class="platorm"><p>${resp.data[job].company_name}</p></div>
                  <div class="read_more">
                    <div class="contry text-primary">${resp.data[job].location}</div>
                    <div class="contry text-primary"><button id="more_btn" data-link="${resp.data[job].read_more}" class="btn btn-sm btn-primary">More</button></div>
                  </div>
                </div>
              </div>
                
            `

            };
            let more_btn=document.querySelectorAll("#more_btn")
            console.log(more_btn,"gtc");
            let more_btn_link ="";
            for(let i =0; i<more_btn.length; i++){
                console.log("What is going on?")
                more_btn[i].addEventListener("click",function(){
                    more_btn_link = this.dataset.link
                    console.log(more_btn_link,"Yes i am ")
                    localStorage.setItem("link",more_btn_link)
                    location.href="details.html"
                })
            }
            // End for loop here
            // Loop and populate the select buttons to popluate the filter select boxes
            let stacks=resp.job_stack
            let locations=resp.job_location
            let job_natures=resp.job_nature
            stacks.forEach(stack => {
                document.getElementById("inputState1").innerHTML +=`
                <option >${stack}</option>
                `
            });
            
            locations.forEach(location => {
                document.getElementById("inputState2").innerHTML +=`
                <option >${location}</option>
                `
            });

            job_natures.forEach(job_nature => {
                document.getElementById("inputState3").innerHTML +=`
                <option >${job_nature}</option>
                `
            });
        },
        error:function(){
            console.log(err)
        }
    })


    // This function is for filter for the user
    $("#filtering_form").submit(function(e){
        e.preventDefault()
        $(".loader").css("display", "block")
        document.getElementById("job_lists_holder").innerHTML ='';
        $.ajax({
            type:"POST",
            url:"http://127.0.0.1:8000/filter_jobs/",
            data:{
                "job_stack":$("#inputState1").val(),
                "location":$("#inputState2").val(),
                "job_nature":$("#inputState3").val(),
            },
            success:function(resp){
                $(".loader").css("display", "none")
            for(job in resp.data){
                console.log(resp)
                document.getElementById("job_lists_holder").innerHTML +=
                `
                <div class="col-lg-4 col-md-6 col-sm-12 mt-2 my_card" >
                <div class="list_card-main">
                  <div class="time_nature"><span class="days_ago">${resp.data[job].posted}</span> <span class="days_ago">.</span><span class="days_ago">${resp.data[job].job_nature}</span></div>
                  <div class="job-heading"><h5>${resp.data[job].job_title}</h5></div>
                  <div class="platorm"><p>${resp.data[job].company_name}</p></div>
                  <div class="read_more">
                    <div class="contry text-primary">${resp.data[job].location}</div>
                    <div class="contry text-primary"><a href="details.html" class="btn btn-sm btn-primary">More</a></div>
                  </div>
                </div>
              </div>
                
            `

            };
            // End for loop here
                document.getElementById("filtering_form").reset()

            
            },
            error:function(err){
                console.log(err)
            }
        })
    }) 
    
})

