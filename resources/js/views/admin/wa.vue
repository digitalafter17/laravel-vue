<template>
  <button class="btn btn-primary py-3 align="right"">
    <h1>Add Broadcast</h1>
  </button>
  
  <button class="btn btn-primary py-3 align="left"">
    <h1>View Watshapp Broadcast</h1>
  </button>
  
  <div class="card-body">
    <ul>id</ul>
    <ul>nama</ul>
    <ul>no tlp</ul>
    <ul>pesan</ul>
    <ul>date and time</ul>
  </div>
  
  <table>
    <th>
      <td>
        //data ada di actionpay.telepon_hp_nomor
        <tr>{{panggil $telepon_hp_nomor}}</tr>
        <tr>{{panggil $nama_nasabah}}</tr>
        <tr>{{panggil new pesan}}</tr>
      </td>
    </th>
  </table>
  
  <script>
    import"datatables.net-dt/js/dataTables.dataTables";
    import"datatables.net-dt/css/jquery.dataTables.min.css";
    export default{
      name:'wa'
      mounted(){
        $('dataTable').(dataTable);
      }
    }
  </script>
</template>
