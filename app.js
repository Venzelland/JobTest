//
//     document.getElementById('jobForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const deal = {
//     firstName: document.getElementById('firstName').value,
//     lastName: document.getElementById('lastName').value,
//     phone: document.getElementById('phone').value,
//     email: document.getElementById('email').value,
//     jobType: document.getElementById('jobType').value,
//     jobSource: document.getElementById('jobSource').value,
//     jobDescription: document.getElementById('jobDescription').value,
//     address: document.getElementById('address').value,
//     city: document.getElementById('city').value,
//     state: document.getElementById('state').value,
//     zipCode: document.getElementById('zipCode').value,
//     area: document.getElementById('area').value,
//     startDate: document.getElementById('startDate').value,
//     startTime: document.getElementById('startTime').value,
//     endTime: document.getElementById('endTime').value,
//     testSelect: document.getElementById('testSelect').value
// };
//     window.parent.postMessage(deal, '*');
// });
//
//     document.getElementById('openIframeBtn').addEventListener('click', function() {
//     document.getElementById('iframe-container').classList.remove('hidden');
// });
//
//     window.addEventListener('message', function(event) {
//     const deal = event.data;
//     createPipedriveDeal(deal);
// });
//
//     function createPipedriveDeal(deal) {
//     const apiToken = '1ffcb07bc4efb07d54a83d525458ee66e758afb3';
//     const url = `https://api.pipedrive.com/v1/deals?api_token=${apiToken}`;
//
//     fetch(url, {
//     method: 'POST',
//     headers: {
//     'Content-Type': 'application/json'
// },
//     body: JSON.stringify({
//     title: `${deal.firstName} ${deal.lastName}`,
//     value: 0,  // Если у вас есть поле value
//     custom_fields: {
//     'cf_address': deal.address,               // Замените 'cf_address' на уникальный ключ поля "Address"
//     'cf_job_type': deal.jobType,              // Замените 'cf_job_type' на уникальный ключ поля "Job type"
//     'cf_job_source': deal.jobSource,          // Замените 'cf_job_source' на уникальный ключ поля "Job source"
//     'cf_job_description': deal.jobDescription,// Замените 'cf_job_description' на уникальный ключ поля "Job description"
//     'cf_city': deal.city,                     // Замените 'cf_city' на уникальный ключ поля "City"
//     'cf_state': deal.state,                   // Замените 'cf_state' на уникальный ключ поля "State"
//     'cf_zip_code': deal.zipCode,              // Замените 'cf_zip_code' на уникальный ключ поля "Zip Code"
//     'cf_area': deal.area,                     // Замените 'cf_area' на уникальный ключ поля "Area"
//     'cf_start_date': deal.startDate,          // Замените 'cf_start_date' на уникальный ключ поля "Start Date"
//     'cf_start_time': deal.startTime,          // Замените 'cf_start_time' на уникальный ключ поля "Start Time"
//     'cf_end_time': deal.endTime,              // Замените 'cf_end_time' на уникальный ключ поля "End Time"
//     'cf_test_select': deal.testSelect         // Замените 'cf_test_select' на уникальный ключ поля "Test Select"
// }
// })
// })
//     .then(response => response.json())
//     .then(data => {
//     if (data.success) {
//     alert('Сделка успешно создана!');
// } else {
//     alert('Ошибка при создании сделки: ' + data.error);
// }
// })
//     .catch(error => {
//     console.error('Ошибка:', error);
//     alert('Ошибка при создании сделки: ' + error.message);
// });
// }
