import sendgrid from '@sendgrid/mail'
sendgrid.setApiKey(process.env.NEXT_SENDGRID_API_KEY)


const sendEmail = async(req, res) => {
    try{
        console.log('REQ.BODY', req.body)
        await sendgrid.send({
            to:"ngoziafricahub@gmail.com",
            from:"info@ngoziafrica.co.ke",
            subject:`${req.body.subject}`,
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.fullName}, their email is: ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              <img src="../../assets/logo/ngozi-logo.png" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Ngozi Africa<br> +254721215653<br>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://www.ngoziafrica.co.ke/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                

              </div>
              </div>
      </body>
      </html>`,
        });
    } catch(error){
        return res.status(error.statusCode ||500).json({error:error.message})
    }

    return res.status(200).json({  message :"Message sent successfully" });
}

export default sendEmail;
