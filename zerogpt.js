const axios = require('axios');


const getResponse = async () => {
    const options = {
        method: 'POST',
        url: 'https://zerogpt.p.rapidapi.com/api/v1/detectText',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '0212405f1emsh12bdeae3d2616d2p1cefbejsnccf498835f37',
            'X-RapidAPI-Host': 'zerogpt.p.rapidapi.com'
        },
        data: {
            input_text: 'C++ is a high-level, general-purpose programming language that was developed by Bjarne Stroustrup in 1983 as an extension of the C programming language. It is an object-oriented language that allows developers to write efficient and portable code that can run on a wide range of platforms, from embedded systems to supercomputers. In this article, we will discuss some of the key features and benefits of C++, as well as its various applications and use cases.'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getResponse();