const text = [
  `Nature is the foundation of life on Earth and provides everything we need to survive.
It gives us fresh air, clean water, nutritious food, and valuable natural resources.
Forests, rivers, mountains, and oceans create beautiful and diverse ecosystems.
Nature also supports countless species of plants and animals.
Protecting the environment helps maintain ecological balance.
Everyone has a responsibility to preserve nature for future generations.`,

  `Technology has transformed the way people communicate, learn, and work.
The internet connects millions of people across the world within seconds.
Smart devices have made daily tasks faster and more convenient.
Technology also plays a vital role in education and healthcare.
However, it should be used wisely and responsibly.
Balancing technology with real-life experiences is important.`,

  `Education is the key to personal growth and lifelong success.
It helps people develop knowledge, skills, and confidence.
Schools and colleges prepare students for future careers.
Education also teaches values such as discipline and respect.
Learning never stops, even after formal education ends.
A well-educated society contributes to national development.`,

  `History helps us understand the events that shaped the modern world.
It teaches valuable lessons from past successes and failures.
Ancient civilizations made significant contributions to science and culture.
Historical monuments preserve the memories of earlier generations.
Studying history strengthens our understanding of different societies.
It inspires us to build a better future.`,

  `Health is one of the greatest assets a person can have.
Eating nutritious food and exercising regularly improve physical fitness.
Adequate sleep is essential for mental and emotional well-being.
Drinking enough water keeps the body healthy and active.
Regular medical checkups help prevent many diseases.
A healthy lifestyle leads to a happier and longer life.`,

  `Books are a wonderful source of knowledge and imagination.
Reading improves vocabulary, concentration, and critical thinking.
Stories introduce readers to different cultures and ideas.
Books can motivate people to achieve their dreams.
Libraries provide access to a wide variety of learning resources.
Developing a reading habit benefits people of all ages.`,

  `The importance of teamwork can be seen in every successful organization.
Working together allows people to share ideas and solve problems efficiently.
Good communication builds trust among team members.
Every individual contributes unique skills and perspectives.
Teamwork increases productivity and creativity.
Success is easier to achieve when people cooperate with one another.`,

  `Sports play an important role in maintaining physical and mental health.
Regular participation improves strength, flexibility, and endurance.
Sports also teach discipline, teamwork, and leadership.
They help reduce stress and increase self-confidence.
Fair play and respect are essential values in every game.
An active lifestyle leads to better overall well-being.`,

  `The environment is a precious gift that supports all forms of life.
Reducing pollution helps protect air, water, and soil quality.
Planting trees improves biodiversity and combats climate change.
Recycling conserves natural resources and reduces waste.
Small daily actions can make a significant difference.
Everyone should work together to protect our planet.`,

  `Success is achieved through hard work, determination, and perseverance.
Setting clear goals helps people stay focused and motivated.
Learning from failures builds resilience and confidence.
Time management is essential for achieving long-term objectives.
Continuous learning opens new opportunities for growth.
With dedication and patience, anyone can reach their dreams.`
];

const form = document.querySelector('.lorem-form');
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", (e)=>{
      e.preventDefault();
      const value = parseInt(amount.value);
      console.log("v:", value);
      const random = Math.floor(Math.random() * text.length);
      if(isNaN(value) || value < 0 || value > 10){
          result.innerHTML = `<p class="result">${text[random]}</p>`
      }
      else{
        console.log("entry");
        let tempText = text.slice(0, value);
        tempText = tempText.map((text)=>{
             return `<p class="result">${text}</p>`
        }).join(" ");

        result.innerHTML = tempText;
      }
});