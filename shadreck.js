function save(){
            for(i = 0; i<myform.length ;i++){
            document.getElementById("myform")
            var project = document.forms[0].elements[0].value;
            var date = document.forms[0].elements[1].value;
            var projectDiscription = document.forms[0].elements[2].value;

            localStorage.setItem("projectName",project);
            localStorage.setItem("projectDate",date);
            localStorage.setItem("projectDescription",projectDiscription);
            }
        }
        function getInfo(){
            var project = localStorage.getItem('projectName');
            var projectDate = localStorage.getItem('projectDate');
            var projectDdescription = localStorage.getItem('projectDescription');
            document.write(project+" "+projectDate+" "+projectDdescription);
        }