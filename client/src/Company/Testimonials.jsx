import React from "react";
import "./Testimonials.css";



const testimonials = [
{
text:"We approached AppAspect for a healthcare app. They nailed the prototype in a week and had the app live in 30 days. Our patients love the clean UI!",
name:"Priya M., Vadodara"
},
{
text:"AppAspect’s team made our logistics tracking app using Flutter and Firebase. Their understanding of Indian market needs was spot on.",
name:"Ankit S., Ahmedabad"
},
{
text:"Their post-launch support is gold. Bugs were fixed within hours, and new features are added monthly. Couldn’t ask for more.",
name:"Ritika G., Delhi"
},
{
text:"The developed app has met every point of my original brief and more. They were easy to work with and always had ideas on how to make the finished product even better... even if it did mean more work for them. Management style was easy to work with. They were very understanding to my needs. The constant assistance that they offered, even after the project is completed, was impressive. They contact me regularly to ensure that everything is working as it should. The after sales customer service is brilliant.",
name:"Rocky Warren"
},
{
text:"We appreciate the hard work and effort that you have put into Extra Miles App. Your dedication and commitment to excellence are evident in the final result, and we are extremely satisfied with the outcome. Your expertise have been instrumental in helping us to achieve our goals, and we are grateful for your support and collaboration. Thank you for the good job that you have done.",
name:"Mohammed Alhawar"
},
{
text:"AppAspect's team managed to bring all the pieces together to create a fully functional app! All features, including the new added ones work perfectly now! AppAspect's team is a group of real professionals. They were always respectful, flexible and informative. The founder would step in, if needed. There was never a single confusion throughout the development process, not once. Working with AppAspect's team was a pleasure.",
name:"Kerop Shahbazian"
},
{
text:"Their knowledge and experience were clear, and their communication was exemplary.The workflow was extremely smooth. They were available all the time, even on the weekends, and met or surpassed all our deadlines. They helped us overcome obstacles and create excellent solutions. AppAspect Technologies Pvt. Ltd. went out of their way to deliver a quality product.",
name:"Guy Ullmann"
},
{
text:"Within three weeks, AppAspect developed the app and launched it to the Android store. Their workflow was good. We appreciated their willingness to go beyond stated features to make the app a success.",
name:"Cameron R. Nelson"
},
{
text:"AppAspect was immediately responsive, demonstrated a strong team of professionals qualified to complete the work, at a price that was an order of magnitude better than our local companies. AppAspect allowed us to complete all of our goals within budget and on time.The AppAspect team was immediately responsive, always. We preferred email and occasionally web chat via GoogleMeet.",
name:"Rebecca Haydock"
},
{
text:"AppAspect was able to understand the interface and worked hand-in-hand with our team to insure success. AppAspect was quick to jump in and make the needed changes. Awesome team. AppAspect delivered on all accounts. They were diligent, trustworthy, knowledgeable. Always on time, and always delivering the promised code.",
name:"Andrew Slater"
},
{
text:"AppAspect provided us with a dedicated project manager thus easing much of the burden on our end between keeping pace, client updates, and overall communication.We were all blown away with the in-depth knowledge and foresight brought by this team. Although our time zones are 8+ hours apart we were able to receive updates twice daily.",
name:"Jamie Hribal"
},
{
text:"Everyone from AppAspect was timely, courteous, and professional. Their clear communication is by far their strongest attribute which is very impressive when communicating across many time zones. I would choose to work with them again and again due to this ease of communication.",
name:"Kris Chain"
},
{
text:"We have done a few App Projects with Guru and his team. Amazing people. Very good technical background combined with excellent business understanding.",
name:"MSener Abanozoglu"
},
{
text:"AppAspect Technologies Pvt. Ltd. listened to our needs and corrected all problems.",
name:"Pawel Pelc"
},
{
text:"They will only continue to improve and grow. The should keep up the good work.",
name:"Daniel Haiem"
},
{
text:"Guru and his team at AppAspect have been wonderful at creating my app for John Q Style. He has taken a real interest in the success of the app and it just feels like he’s a part of the team. He is really responsive and accessible and I look forward to continue working with him.",
name:"Michael Lee"
},
{
text:"Gurupritsingh, undeniably, has exemplary technical skills in mobile apps development. Dedicated and works fast without sacrificing quality. He communicates really well and is able to relay the technical aspect of the project to non-techy partners. Will Surely collaborate with him again in the future when the opportunity to develop apps arises.",
name:"Lance Sison"
},
{
    text:"Gurupritsingh is a hard working and diligent programmer and software engineer. He always provides excellent services in a timely manner. I've enjoyed working with him and getting to know him and look forward to working with Gurupritsingh again in the future.",
    name:"Carolyn Sorrell"
},
{
    text:"Gurupritsingh and his team displayed great skill and professionalism on various web and application projects which we've both been affiliated. We had worked together via Ziptask and just recently on a project commissioned myself. On all accounts he and his them delivered as promise on time. I would highly recommend the services of Gurupritsingh and App Aspect to anyone looking to develop digital products!.",
    name:"Matthew Johnson"
},
{
    text:"I've been working with Guru & AppAspect for more than 7 years. We produce websites and apps for iOS and Android for the German market. Guru and his team always have done a wonderful job and together we have successfully finished many apps and web projects. AppAspect always delivered to full customer satisfaction. I can highly recommend the services of Guru and AppAspect.",
    name:"Ralf Hollax, AppzCreative Ltd"
}
];

function Testimonials(){

return(

<div className="testimonials-page">

{/* HERO SECTION */}

<div
className="testimonials-htao"
style={{
backgroundImage: "url('/images/testimonials-hero.jpg')"
}}
>

<div className="htao-overlay">

<h1>Testimonials</h1>

<p>What Our Clients Say About Us</p>
    <h6>
Our clients are at the heart of everything we do, and their feedback reflects the passion and dedication our team brings to every project. 
Over the years, we have worked with startups, entrepreneurs, and established businesses from different industries to build powerful and reliable mobile applications. 
Each project presents unique challenges, and our team approaches them with creativity, technical expertise, and a strong commitment to delivering the best results. 
From initial idea discussions to final product launch, we focus on maintaining clear communication and collaboration with our clients. 
This helps us fully understand their goals and transform their vision into a functional and user-friendly digital product. 
Many of our clients appreciate our ability to deliver high-quality prototypes quickly while still maintaining excellent attention to detail. 
Our developers, designers, and project managers work closely together to ensure that every application meets modern design standards and performance expectations. 
We also believe that the relationship with our clients does not end once the app is launched. 
Our team continues to provide ongoing support, updates, and improvements to keep applications running smoothly and efficiently. 
This long-term partnership approach has helped us build trust with businesses across multiple regions. 
Whether it is a healthcare solution, business tool, lifestyle application, or enterprise platform, we aim to create apps that users truly enjoy. 
The testimonials shared below are real experiences from clients who trusted us with their ideas and allowed us to bring them to life. 
Their success stories motivate us to keep improving, innovating, and delivering better solutions every day. 
We are proud of the relationships we have built and the positive impact our work has had on businesses and their customers. 
Your feedback inspires us to continue building exceptional mobile applications that solve real-world problems and create meaningful digital experiences.
</h6>



</div>

</div>


{/* TESTIMONIALS */}

<div className="testimonials-container">

<div className="testimonials-grid">

{testimonials.map((item,index)=>(

<div className="testimonial-card" key={index}>

<div className="quote-icon">❝</div>

<p className="testimonial-text">

{item.text}

</p>

<h4 className="client-name">

{item.name}

</h4>

</div>

))}

</div>

</div>


</div>

);
}

export default Testimonials;