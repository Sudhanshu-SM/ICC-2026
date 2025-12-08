function checkForm()
                    {
                      // validation fails if the input is blank
                      
                      /*
                      if(form.elements["entry.495363380"].value == "") 
                      {
                        
                        form.elements["entry.495363380"].focus();
                        return false;
                      }
                      
                      */

                      if(document.getElementById("teamname").value.length == 0)
                      {
                          document.getElementById("teamname").focus();
                          var mysubmit = document.getElementById('submit');
                          var displaySetting = submit.style.display;
                          mysubmit.style.display = 'block';
                          document.getElementById("submit").innerText = "Fill all compulsory fields and try again";

                      }

                      else if(document.getElementById("firstname1").value.length == 0)
                      {
                          document.getElementById("firstname1").focus();
                          var mysubmit = document.getElementById('submit');
                          var displaySetting = submit.style.display;
                          mysubmit.style.display = 'block';
                          document.getElementById("submit").innerText = "Fill all compulsory fields and try again";

                      }

                      else if(document.getElementById("email1").value.length == 0)
                      {
                          document.getElementById("email1").focus();
                          var mysubmit = document.getElementById('submit');
                          var displaySetting = submit.style.display;
                          mysubmit.style.display = 'block';
                          document.getElementById("submit").innerText = "Fill all compulsory fields and try again";

                      }

                      else if(document.getElementById("phone1").value.length == 0)
                      {
                          document.getElementById("phone1").focus();
                          var mysubmit = document.getElementById('submit');
                          var displaySetting = submit.style.display;
                          mysubmit.style.display = 'block';
                          document.getElementById("submit").innerText = "Fill all compulsory fields and try again";

                      }

                      else if(document.getElementById("college1").value.length == 0)
                      {
                          document.getElementById("college1").focus();
                          var mysubmit = document.getElementById('submit');
                          var displaySetting = submit.style.display;
                          mysubmit.style.display = 'block';
                          document.getElementById("submit").innerText = "Fill all compulsory fields and try again";

                      }


                      else if(document.getElementById("firstname2").value.length == 0)
                      {
                          document.getElementById("firstname2").focus();
                          var mysubmit = document.getElementById('submit');
                          var displaySetting = submit.style.display;
                          mysubmit.style.display = 'block';
                          document.getElementById("submit").innerText = "Fill all compulsory fields and try again";

                      }

                      else if(document.getElementById("email2").value.length == 0)
                      {
                          document.getElementById("email2").focus();
                          var mysubmit = document.getElementById('submit');
                          var displaySetting = submit.style.display;
                          mysubmit.style.display = 'block';
                          document.getElementById("submit").innerText = "Fill all compulsory fields and try again";

                      }

                      else if(document.getElementById("phone2").value.length == 0)
                      {
                          document.getElementById("phone2").focus();
                          var mysubmit = document.getElementById('submit');
                          var displaySetting = submit.style.display;
                          mysubmit.style.display = 'block';
                          document.getElementById("submit").innerText = "Fill all compulsory fields and try again";

                      }

                      else if(document.getElementById("college2").value.length == 0)
                      {
                          document.getElementById("college2").focus();
                          var mysubmit = document.getElementById('submit');
                          var displaySetting = submit.style.display;
                          mysubmit.style.display = 'block';
                          document.getElementById("submit").innerText = "Fill all compulsory fields and try again";

                      }
                      
                      else if(document.getElementById("firstname3").value.length == 0)
                      {
                          document.getElementById("firstname3").focus();
                          var mysubmit = document.getElementById('submit');
                          var displaySetting = submit.style.display;
                          mysubmit.style.display = 'block';
                          document.getElementById("submit").innerText = "Fill all compulsory fields and try again";

                      }

                      else if(document.getElementById("email3").value.length == 0)
                      {
                          document.getElementById("email3").focus();
                          var mysubmit = document.getElementById('submit');
                          var displaySetting = submit.style.display;
                          mysubmit.style.display = 'block';
                          document.getElementById("submit").innerText = "Fill all compulsory fields and try again";

                      }

                      else if(document.getElementById("phone3").value.length == 0)
                      {
                          document.getElementById("phone3").focus();
                          var mysubmit = document.getElementById('submit');
                          var displaySetting = submit.style.display;
                          mysubmit.style.display = 'block';
                          document.getElementById("submit").innerText = "Fill all compulsory fields and try again";

                      }

                      else if(document.getElementById("college3").value.length == 0)
                      {
                          document.getElementById("college3").focus();
                          var mysubmit = document.getElementById('submit');
                          var displaySetting = submit.style.display;
                          mysubmit.style.display = 'block';
                          document.getElementById("submit").innerText = "Fill all compulsory fields and try again";

                      }


                      else if(document.getElementById("ques1").value.length == 0)
                      {
                          document.getElementById("ques1").focus();
                          var mysubmit = document.getElementById('submit');
                          var displaySetting = submit.style.display;
                          mysubmit.style.display = 'block';
                          document.getElementById("submit").innerText = "Fill all compulsory fields and try again";

                      }
                      // validation was successful
                      
                      else {
                        document.rform.submit();
                        // document.regform.reset();
                        var mysubmit = document.getElementById('submit');
                        var displaySetting = submit.style.display;
                        mysubmit.style.display = 'block';
                        document.getElementById("submit").innerHTML = "<center><h1><b>You have successfully registered for ICC 2025.</b></h1  ></center> <br>Business Club conducts ICC every year in association with Kshitij. Kshitij is the annual techno-management fest of IIT Kharagpur. Kshitij organizes a wide range of events encompassing every genre of technology and management. Numerous events of the fest are cerified by World-renowned organizations like ACM, IEEE, ASME, ASHRAE and IMechE. This year Kshitij will be conducted on 17th, 18th and 19th January 2025.<br> <center><h1><b>For information regarding further rounds, you can register at: <a href='https://ktj.in/' target='_blank'>Kshitij 2025</a></b></h1></center>";
                      }

                    }
