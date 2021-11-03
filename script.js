console.log("Logged in : EzyISF: ISF extension")


function setup(){

    let wo_button = document.getElementById("CreateWO")
    wo_button.addEventListener("click", createWorkOrder)


    function createWorkOrder() {

        // function to create workorder
        var signum = document.getElementById("signum").value
        var nodename = document.getElementById("nodename").value
        var nodetype = document.getElementById("nodetype").value

        
        

        createWorkOrderPlan = "https://integratedserviceflow.ericsson.net/apim/v1/externalInterface/createWorkOrderPlan/"





        console.log(val)
    }





}

window.onload = setup




