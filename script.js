const form = document.getElementById('form');
form.addEventListener('submit',SimpanForm);

function TampilkanData(){
    document.getElementById('input-nama').value = document.getElementById('nama').innerHTML;
    document.getElementById('input-role').value = document.getElementById('role').innerHTML;
    document.getElementById('input-availability').value = document.getElementById('availability').innerHTML;
    document.getElementById('input-usia').value = document.getElementById('usia').innerHTML;
    document.getElementById('input-lokasi').value = document.getElementById('lokasi').innerHTML;
    document.getElementById('input-year').value = document.getElementById('year').innerHTML;
    document.getElementById('input-email').value =  document.getElementById('email').innerHTML;
}
function SimpanForm(e){
    let name = document.getElementById('input-nama').value;
    let role = document.getElementById('input-role').value;
    let availability = document.getElementById('input-availability').value;
    let usia = document.getElementById('input-usia').value;
    let lokasi = document.getElementById('input-lokasi').value;
    let year = document.getElementById('input-year').value;
    let email = document.getElementById('input-email').value;
    document.getElementById('nama').innerHTML = name;
    document.getElementById('role').innerHTML = role;
    document.getElementById('availability').innerHTML = availability;
    document.getElementById('usia').innerHTML = usia;
    document.getElementById('lokasi').innerHTML = lokasi;
    document.getElementById('year').innerHTML = year;
    document.getElementById('email').innerHTML = email;
    e.preventDefault();
}
