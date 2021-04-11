import axios from 'axios'

var apiKey = '199b9b1a-1973-4aa9-9f7c-f22b9a9b4cbe';

export default {
    getToken: async () =>
        await axios.get(
            'https://project.trumedianetworks.com/api/token',
            {
                'headers': { 
                    'accept': 'application/json', 
                    'apiKey': apiKey,
                    'Access-Control-Allow-Origin': "*"
                }
            }
    ),

    getPlayers: async(tempToken) =>
        await axios.get(
            'https://project.trumedianetworks.com/api/mlb/players',
            {
                'headers': { 
                    'accept': 'application/json', 
                    'tempToken': tempToken,
                    'Access-Control-Allow-Origin': "*"
                }
            }
    ),

    getGameData: async(tempToken, playerId) =>
        await axios.get(
        'https://project.trumedianetworks.com/api/mlb/player/'+playerId,
        {
            'headers': { 
                'accept': 'application/json', 
                'tempToken': tempToken,
                'Access-Control-Allow-Origin': "*"
            },
            // 'params': playerId
        }
    )
}