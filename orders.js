// declaram un array de obiecte cu produsele
const Orders = [
    {
        productName : 'Foldable Mini Drone',
        productNumber : '85631',
        paymentStatus : 'Due',
        shipping : 'Pending'
    },

    {
        productName : 'LARVENDER KF102 Drone',
        productNumber : '37465',
        paymentStatus : 'Refunded',
        shipping : 'Declined'
    },

    {
        productName : 'Ruko F1 Pro Drone',
        productNumber : '24975',
        paymentStatus : 'Due',
        shipping : 'Pending'
    },

    {
        productName : 'Drone with Camera Drone',
        productNumber : '88642',
        paymentStatus : 'Paid',
        shipping : 'Delivered'
    },

    {
        productName : 'GPS 4k Drone',
        productNumber : '22821',
        paymentStatus : 'Paid',
        shipping : 'Delivered'
    },

    {
        productName : 'DJI Air 2S',
        productNumber : '81475',
        paymentStatus : 'Due',
        shipping : 'Delivered'
    },

    {
        productName : 'Lozenge Drone',
        productNumber : '00472',
        paymentStatus : 'Paid',
        shipping : 'Delivered'
    }
]

//adaugam array-ul in tabel
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.shipping === 'Declined' ? 'difcolor' : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td> 
    <td class="primary">Details</td> `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})