document.getElementById('jobForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const deal = {
        title: document.getElementById('jobType').value + ' Job for ' + document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value,
        value: 0,
        "de9c744b418a1dd7917feccc6c154bd34d7ebfd6": document.getElementById('address').value,
        '7f2422b5d7a8883d5f69b0b3e647dcfa4a116dde': document.getElementById('phone').value,
        "e1f4e642e8c2e96ce6fc2f0a8a59a9d369390fea": document.getElementById('email').value,
        '23fd27b4373b591fb6cb7265b31073ceed4e2de0': document.getElementById('jobType').value,
        '1e8a6595a55c7e3cc1b1311b52826c624b3d75d2': document.getElementById('jobSource').value,
        '1106f371b301b4093fbd6471d6773474c06f5312': document.getElementById('jobDescription').value,
        'ff2bacbe72520108eab137e89940bd1e6db763d1': document.getElementById('city').value,
        'cd53d39c0be4656168ef9849a99d563595c37106': document.getElementById('state').value,
        '788afa403933474fd0392c1ae4b0aa30da6e0efc': document.getElementById('zipCode').value,
        '82d25fe7c2889022a43efc0d3e54f4d4c8e9ec81': document.getElementById('area').value,
        'e58b4c69da23f6ff7e7feac99ac3bd3639105800': document.getElementById('startDate').value,
        '3ff8fc36c133b75f15fe432b28c28bd5731876ea': document.getElementById('startTime').value,
        '4358232f36986a2ed11b395eddedaa2471ada3dc': document.getElementById('endTime').value,
        'f0820afac1b8a4b68d87078b5c86a91f5940ca59': document.getElementById('testSelect').value

    };
    createPipedriveDeal(deal);
});

function createPipedriveDeal(deal) {
    const apiToken = '376dde13fa759a67727f8719d4552e439b002355';
    const url = `https://api.pipedrive.com/v1/deals?api_token=${apiToken}`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(deal)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Сделка успешно создана!');
            } else {
                alert('Ошибка при создании сделки: ' + data.error);
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Ошибка при создании сделки: ' + error.message);
        });
}