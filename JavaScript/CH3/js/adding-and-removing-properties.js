var hotel = {
    name : 'Park',
    rooms : 120,
    booked : 77
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elPool = document.getElementById('pool');
elName.className = hotel.pool;

var elName = document.getElementById('gym');
elName.className = hotel.gym;