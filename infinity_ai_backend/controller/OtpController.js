let routes = require("express").Router();
let User = require("../models/User")


let rn = require('random-number');


let nodemailer = require("nodemailer")
// let mailGen = require("mailgen")
const {EMAIL, PASSWORD} = require("../config/env")

routes.get("/:id", async (req, res) => {

  let id = req.params.id;
var gen = rn.generator({
  min:  99999
, max:  999999
, integer: true
})
let random = gen()
  await User.updateOne({_id : id}, {otp : random});
  setTimeout(async ()=> {
  await User.updateOne({ _id: id },
  { $set: { otp: null } })
    }, 5 * 60 * 1000); // 5 minutes expressed in milliseconds
    
  let result = await User.find({_id : id})
  const nodemailer = require('nodemailer');

  let userEmail = result[0].email;
  let userName = result[0].name;
  
  // send mail using Gmail and nodemailer
  let config = {
    service: 'gmail',
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  };
  
  let transporter = nodemailer.createTransport(config);
  
  let mailOptions = {
    from: EMAIL,
    to: userEmail,
    subject: 'Verification code to login on SabkaApp',
    html: `
    <!--begin::Head-->
<head>
        <!--begin::Fonts(mandatory for all pages)-->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700"/>        <!--end::Fonts-->

                    <!--begin::Global Stylesheets Bundle(mandatory for all pages)-->
                            <link href="../assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css"/>
                            <link href="../assets/css/style.bundle.css" rel="stylesheet" type="text/css"/>
            </head>
    <!--end::Head-->

    <!--begin::Body-->
    <body  id="kt_body"  class="app-blank" >
        <!--begin::Root-->
<div class="d-flex flex-column flex-root" id="kt_app_root">
    

    <!--begin::Wrapper-->
    <div class="d-flex flex-column flex-column-fluid">
        <!--begin::Body-->
        <div class="scroll-y flex-column-fluid px-10 py-10"
            data-kt-scroll="true" 
            data-kt-scroll-activate="true" 
            data-kt-scroll-height="auto" 
            data-kt-scroll-dependencies="#kt_app_header_nav"  
            data-kt-scroll-offset="5px" 
            data-kt-scroll-save-state="true" 

            style="background-color:#D5D9E2; --kt-scrollbar-color: #d9d0cc; --kt-scrollbar-hover-color: #d9d0cc"
        >

        <!--begin::Email template-->      
		<style>
            html,body {
                padding:0;
                margin:0;
                font-family: Inter, Helvetica, "sans-serif";                                       
            }            

			a:hover {
                color: #009ef7;
            }
        </style>
        
        <div id="#kt_app_body_content" style="background-color:#D5D9E2; font-family:Arial,Helvetica,sans-serif; line-height: 1.5; min-height: 100%; font-weight: normal; font-size: 15px; color: #2F3044; margin:0; padding:0; width:100%;">
            <div style="background-color:#ffffff; padding: 45px 0 34px 0; border-radius: 24px; margin:40px auto; max-width: 600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="auto" style="border-collapse:collapse">
                    <tbody>                      
                        <tr>
                            <td align="center" valign="center" style="text-align:center; padding-bottom: 10px">
                                
    <!--begin:Email content-->
    <div style="text-align:center; margin:0 60px 34px 60px">
        <!--begin:Logo-->
        <div style="margin-bottom: 10px">
            <a href="https://keenthemes.com/" rel="noopener" target="_blank">
                <img alt="Logo" src="../assets/media/email/logo-1.svg" style="height: 35px"/>
            </a>
        </div>
        <!--end:Logo-->

        <!--begin:Media-->
        <div style="margin-bottom: 15px">
            <img alt="Logo" src="http://localhost:4000/media/email/icon-positive-vote-2.svg"/> 
        </div>     
        <!--end:Media-->                        

        <!--begin:Text-->
        <div style="font-size: 14px; font-weight: 500; margin-bottom: 27px; font-family:Arial,Helvetica,sans-serif;">
            <p style="margin-bottom:9px; color:#181C32; font-size: 22px; font-weight:700">It’s almost set!</p>
            <p style="margin-bottom:2px; color:#7E8299">Welcome, ${userName}, to the world of</p>
            <p style="margin-bottom:2px; color:#7E8299">automated website building. Building websites</p>  
            <p style="margin-bottom:2px; color:#7E8299">has never been easier—it's almost like drawing!</p>  
            <p style="margin-top:10px; color:#181C32; font-size: 22px; font-weight:400">${random}</p>
        </div>  
        <!--end:Text-->
         
        <!--begin:Action-->
        <a href="../layouts/corporate/reset-password.html" target="_blank" style="background-color:#50cd89; border-radius:6px;display:inline-block; padding:11px 19px; color: #FFFFFF; font-size: 14px; font-weight:500; font-family:Arial,Helvetica,sans-serif;">
            Varify Otp
        </a> 
        <!--end:Action-->        
    </div>
    <!--end:Email content-->    
                            </td>
                        </tr>  

                         
                            <tr style="display: flex; justify-content: center; margin:0 60px 35px 60px">
                                <td align="start" valign="start" style="padding-bottom: 10px;">
                                    <p style="color:#181C32; font-size: 18px; font-weight: 600; margin-bottom:13px">What to learn?</p>

                                    <!--begin::Wrapper-->
                                    <div style="background: #F9F9F9; border-radius: 12px; padding:35px 30px">
                                                                                    <!--begin::Item-->
                                            <div style="display:flex">                    
                                                <!--begin::Media-->
                                                <div style="display: flex; justify-content: center; align-items: center; width:40px; height:40px; margin-right:13px">
                                                    <img alt="Logo" src="http://localhost:4000/media/email/icon-polygon.svg"/>  
                                                    
                                                                                                            <span style="position: absolute">
                                                            <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->
<span class="svg-icon svg-icon-3 svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor"/>
<rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor"/>
<rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor"/>
<rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->     
                                                        </span>                  
                                                                                                 
                                                </div>
                                                <!--end::Media-->                   

                                                <!--begin::Block-->
                                                <div>
                                                    <!--begin::Content-->
                                                    <div>
                                                        <!--begin::Title-->
                                                        <a href="#" style="color:#181C32; font-size: 14px; font-weight: 600;font-family:Arial,Helvetica,sans-serif">Complete your account</a>
                                                        <!--end::Title-->

                                                        <!--begin::Desc-->
                                                        <p style="color:#5E6278; font-size: 13px; font-weight: 500; padding-top:3px; margin:0;font-family:Arial,Helvetica,sans-serif">Lots of people make mistakes while creating paragraphs Some writers just put whitespace in their text</p>   
                                                        <!--end::Desc-->                                     
                                                    </div>
                                                    <!--end::Content-->  
                                                    
                                                                                                            <!--begin::Separator-->
                                                        <div class="separator separator-dashed" style="margin:17px 0 15px 0"></div>
                                                        <!--end::Separator-->
                                                                                       
                                                </div>
                                                <!--end::Block-->  
                                            </div>                                           
                                            <!--end::Item-->                                          
                                                                                    <!--begin::Item-->
                                            <div style="display:flex">                    
                                                <!--begin::Media-->
                                                <div style="display: flex; justify-content: center; align-items: center; width:40px; height:40px; margin-right:13px">
                                                    <img alt="Logo" src="http://localhost:4000/media/email/icon-polygon.svg"/>  
                                                    
                                                                                                            <span style="position: absolute">
                                                            <!--begin::Svg Icon | path: icons/duotune/communication/com012.svg-->
<span class="svg-icon svg-icon-3 svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor"/>
<rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor"/>
<rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->     
                                                        </span>                  
                                                                                                 
                                                </div>
                                                <!--end::Media-->                   

                                                <!--begin::Block-->
                                                <div>
                                                    <!--begin::Content-->
                                                    <div>
                                                        <!--begin::Title-->
                                                        <a href="#" style="color:#181C32; font-size: 14px; font-weight: 600;font-family:Arial,Helvetica,sans-serif">Communication Tool</a>
                                                        <!--end::Title-->

                                                        <!--begin::Desc-->
                                                        <p style="color:#5E6278; font-size: 13px; font-weight: 500; padding-top:3px; margin:0;font-family:Arial,Helvetica,sans-serif">Craft a headline that is both informative and will capture readers’ improtant attentions</p>   
                                                        <!--end::Desc-->                                     
                                                    </div>
                                                    <!--end::Content-->  
                                                    
                                                                                                            <!--begin::Separator-->
                                                        <div class="separator separator-dashed" style="margin:17px 0 15px 0"></div>
                                                        <!--end::Separator-->
                                                                                       
                                                </div>
                                                <!--end::Block-->  
                                            </div>                                           
                                            <!--end::Item-->                                          
                                                                                    <!--begin::Item-->
                                            <div style="display:flex">                    
                                                <!--begin::Media-->
                                                <div style="display: flex; justify-content: center; align-items: center; width:40px; height:40px; margin-right:13px">
                                                    <img alt="Logo" src="http://localhost:4000/media/email/icon-polygon.svg"/>  
                                                    
                                                                                                            <span style="position: absolute">
                                                            <!--begin::Svg Icon | path: icons/duotune/general/gen014.svg-->
<span class="svg-icon svg-icon-3 svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="currentColor"/>
<path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="currentColor"/>
<path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->     
                                                        </span>                  
                                                                                                 
                                                </div>
                                                <!--end::Media-->                   

                                                <!--begin::Block-->
                                                <div>
                                                    <!--begin::Content-->
                                                    <div>
                                                        <!--begin::Title-->
                                                        <a href="#" style="color:#181C32; font-size: 14px; font-weight: 600;font-family:Arial,Helvetica,sans-serif">Task Planner</a>
                                                        <!--end::Title-->

                                                        <!--begin::Desc-->
                                                        <p style="color:#5E6278; font-size: 13px; font-weight: 500; padding-top:3px; margin:0;font-family:Arial,Helvetica,sans-serif">Use images to enhance your post, improve its flow, add humor, and explain complex topics</p>   
                                                        <!--end::Desc-->                                     
                                                    </div>
                                                    <!--end::Content-->  
                                                    
                                                                                       
                                                </div>
                                                <!--end::Block-->  
                                            </div>                                           
                                            <!--end::Item-->                                          
                                         
                                    </div> 
                                    <!--end::Wrapper-->
                                </td>
                            </tr>    
                                                
                         
                        <tr>
                            <td align="center" valign="center" style="font-size: 13px; text-align:center; padding: 0 10px 10px 10px; font-weight: 500; color: #A1A5B7; font-family:Arial,Helvetica,sans-serif">
                                <p style="color:#181C32; font-size: 16px; font-weight: 600; margin-bottom:9px                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ">Contact Us!</p>
                                <p style="margin-bottom:2px">Call our customer care number: +91 623 205 3953</p>
                                <p style="margin-bottom:4px">You may reach us at <a href="http://localhost:3000/verify/otp" rel="noopener" target="_blank" style="font-weight: 600">devs.Infinity_ai.com</a>.</p>
                                <p>We serve Sun-Mon, 24 hours</p>                                
                            </td>
                        </tr>   
                        
                        <tr>
                            <td align="center" valign="center" style="text-align:center; padding-bottom: 20px;">                                
                                <a href="#" style="margin-right:10px"><img alt="Logo" src="http://localhost:4000/media/email/icon-linkedin.svg"/></a>    
                                <a href="#" style="margin-right:10px"><img alt="Logo" src="http://localhost:4000/media/email/icon-dribbble.svg"/></a>    
                                <a href="#" style="margin-right:10px"><img alt="Logo" src="http://localhost:4000/media/email/icon-facebook.svg"/></a>   
                                <a href="#"><img alt="Logo" src="http://localhost:4000/media/email/icon-twitter.svg"/></a>                           
                            </td>
                        </tr>
                        
                        <tr>
                            <td align="center" valign="center" style="font-size: 13px; padding:0 15px; text-align:center; font-weight: 500; color: #A1A5B7;font-family:Arial,Helvetica,sans-serif">                            
                                <p> &copy; Copyright Infinity_ai.
                                    <a href="http://localhost:3000/verify/otp" rel="noopener" target="_blank" style="font-weight: 600;font-family:Arial,Helvetica,sans-serif">Unsubscribe</a>&nbsp;
                                    from newsletter.
                                </p>                         
                            </td>
                        </tr>      
                    </tbody>   
                </table> 
            </div>
        </div>
        <!--end::Email template-->

        </div>
        <!--end::Body-->
    </div>
    <!--end::Wrapper-->

 </div>
<!--end::Root-->
        
            </body>
    <!--end::Body-->
    `,
  };
  
  transporter.sendMail(mailOptions)
    .then(() => {
      return res.status(200).json({
        msg: 'You should receive an email',
        status: 200,
        success: true,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error });
    });
  


});

routes.post("/checkotp", async (req,res)=> {

    let otp = req.body.otp;
    let email = req.body.email;
    try {
        let verifyEmail = await User.find({ email: email });
        if (verifyEmail.length == 1) {
          let result = await User.find({ otp: otp });
          if (result.length == 1) {
            await User.updateOne({ email: email }, { $set: { is_verified: true } });
            console.log('User verified');
            res.send({ status: 200, success: true });
          } else {
            res.send({ status: 401, success: false });
          }
        } else {
          res.send({ status: 401, success: false });
        }
      } catch (error) {
        console.error(error);
        res.send({ status: 500, success: false, error: 'Internal Server Error' });
      }
      
})

// routes.get("/otpverified/:id", async (req,res)=> {
//     let id = req.params.id;
// try {
//     let result = await User.updateMany({_id : id}, {isVerified : true})
// res.send({status : 200, success : true})
// }catch (error) {
//     console.log(error)
// }
// })


module.exports = routes;