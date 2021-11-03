console.log("Logged in : EzyISF: ISF extension")


function setup(){

    let wo_button = document.getElementById("CreateWO")
    wo_button.addEventListener("click", createWorkOrder)


    function createWorkOrder() {

        // function to create workorder
        var signum = document.getElementById("signum").value
        var nodename = document.getElementById("nodename").value
        var nodetype = document.getElementById("nodetype").value

        var today = new Date();
        var date = today.toJSON().slice(0, 10);
        var nTime = today.toTimeString().slice(0,8)
        var nDate = date.slice(8, 10) + '-' 
                       + date.slice(5, 7) + '-' 
                       + date.slice(0, 4);

        
        params = {
            "projectID":"21782", //project id give
            "priority":"High",
            "startDate":nDate,
            "startTime":nTime,
            "wOName":"WRAN SiteTuning", //WF name
            "assignedTo":signum,
            "lastModifiedBy":"esharpi", //ignum WF owner
            "listOfNode":[
               {
                  "nodeNames":nodename,
                  "nodeType":nodetype
               }
            ],
            "comment":"GNET",
            "executionPlanName":"WCDMA_New Site Optimization_Eric",  //Deliverable Plan ID
            "externalSourceName":"GNET"
         }







        

        createWorkOrderPlan = "https://integratedserviceflow.ericsson.net/apim/v1/externalInterface/createWorkOrderPlan/"

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 && xhr.status == 200){
                alert("Done bro done!")

            }
        }
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.setRequestHeader("Apim-Subscription-Key", "1ca9ba625d3a42c1bf21cf1e2b9d8af4")
        xhr.send(JSON.stringify(params));


        
    }





}

window.onload = setup




