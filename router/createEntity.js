
const express = require('express')
const router  = express.Router()
const cors = require('cors')

//runSample is the function to detect intent
async function runSample(req,res) {
const dialogflow = require('dialogflow');
const uuid = require('uuid');
const projectId = 'api-testing-atlnpo'
let pk = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC6rkaKKvtxR5w3\nSo3WMoebKNdndPQ09PxqxwC8AM8J9Pk1yLVJ2M2DNlSOxVYftyfUx9AHZ6F0MOZc\nYb4j81UGz1oUgbZwvwDRiTh9A2RQQoemP+ZVFGMVftOD6QaNWi4ZLaUKM61txSH5\nJ2sno1l4KV45ZRz5OGE+OOmtWCz2eQFLSTy86nhNxp/TsP5MHle3Hu6QbBeFKX6T\nB1h4nAyGEPGX85HEConTyOjg9DQrPsP08OHnQP1LX4fber/a+ZT8Cqh+9r3F0BTX\nV+WEb5FXNSlvi8pXGyzkolhU5RGUl94Wyy2XTdS38j306iynRHHWR8z6mdhwlBKD\nnOzQbT0pAgMBAAECggEACVhrIJnulNOvFCzadTl6BMBNKZk3Fnrt3fyQuANZr1fB\nArpwVOjnv49V5AB+A2rHBtsVOiGrzqYaCiWR1WPmQvKDbG5imeSon6oSbAkM7wr9\nlnWGzDCP60YPmarDO1/4hHspUshBK4hzCcbkPDZBvDG59/6XWOSZKE/EvFBN4+1s\nXDoj2uS+6dGzNiXaFCaAIJPjLgjfStxqfaEdCMd+JkgB1SzIlod++rHpwwJ9yZ8G\ndo41wj5PeCITFvrUJw7OBjDlLuLH0Y+Id7A2zuZYMCORwlT7o5NGYKyldfYt60It\n56+vzwdFdf8f6xWhmSwCJbDWjsPSJupUfl/qcKJ5GQKBgQD/K5ljRo63KRwxG7d7\nc+xOsgzCD/qf5wTywpOl124chHTvflWvzo7ih6vrLwT4s+uX2Pj5/dylrAvsNdpQ\nA2HPHMvGARv9xElRGl/zfKn7ztdMsg49dI0yjdfXNc0Kr2nsYDhWdhil+ARxxGbY\nHYIZkd+3X5yjkmmvNoChfJWOFQKBgQC7Saqdd+yUCZSy9C6a6pCppjnENYgH91Ob\n8yCwLhj+B7WeargAeEds6rCCE8NYBBPlsd/f3YayiyPCRF62kj3P6X/ugxx8iUud\nz9MJurF8HArY7/7LaFrfYkxmJ26Yq9INZd8Z3eAhw1RY6VIbDyQuY56Kz1R5smsy\nsv9VfkwLxQKBgHpEvvQF/B6h0UNqv4mlK2cuA9T9aR8zyHg2ah8+UiHSCmIzzAU4\n2diMIAHKfvxY4hvZuLu5PAAap3/g8iIC7NwcNTxEjdAUPPlixPVcF+tz2lCCxTYH\nYh0GQJV7zys+kGfWV0h+wCLO6/pDnPATe6Ka9nLcmqb6Yi+10v8OPm9dAoGAdc1C\nOcXi0sKr+1vHrL15vJvHnfil1Yzl1CO7HdYA9lfXDwvFLNZ65rE/0LGpn0UBVurp\nDCCExuzp0xm6EVAu/QW76EQjuNmK7Hp6HZaGaLAiyo06UKsU7Ykg0OhgkjsQ5kh7\nagO7JMF93mbzs/10HpGeeWUrl1h4QO2B2T6VipkCgYEAoew6/bVpB5b7CtJZogeo\n+o6i/J+VBEqVbw10p92WiWz0HDj7E6wIMn6JHFsEsy+0dnW3qiHMciIe/lQphF4E\nSp3zYnxV1Nl2MN8D5ie835VYc5dohTlD53JHX7FDPE2LdeFAhQjCU+jfsWXFGITN\nreoCTuHif+Cdvq7yKbl+lHI=\n-----END PRIVATE KEY-----"
let email = "api-testing-atlnpo@appspot.gserviceaccount.com";
var config = {
credentials: {
  private_key: pk,
  client_email: email
}
}
//let projectId = req.body.projectId;
entityTypeId = "1";
entityValue = "FisrtEntity";
synonyms = "first";
 

// A unique identifier for the given session
const sessionId = uuid.v4();
// Create a new session
const sessionClient = new dialogflow.SessionsClient(config);
//include the above in all apis

//const dialogflow = require('dialogflow');

  // Instantiates clients
  const entityTypesClient = new dialogflow.EntityTypesClient();

  // The path to the agent the created entity belongs to.
  const agentPath = entityTypesClient.entityTypePath(projectId, entityTypeId);

  const entity = {
    value: entityValue,
    synonyms: synonyms,
  };

  const createEntitiesRequest = {
    parent: agentPath,
    entities: [entity],
  };

  const [response] = await entityTypesClient.batchCreateEntities(
    createEntitiesRequest
  );
  console.log('Created entity type:');
  console.log(response);
  // [END dialogflow_create_entity]
}





module.exports = {
    runSample: runSample
    };
