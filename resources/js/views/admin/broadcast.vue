  <template>
    <div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Creat Broadcast</h6>
        </div>
        <button class="btn btn-primary py-3 align="right"">
          <h1>Add Broadcast</h1>
        </button>
        <button class="btn btn-primary py-3 align="left"">
          <h1>View Email Broadcast</h1>
        </button>
        <div class="card-body">
          <ul>id</ul>
          <ul>nama</ul>
          <ul>email</ul>
          <ul>pesan</ul>
        </div>
        <table>
          <th>
            <td>
              <tr>{{panggil id}}</tr>
              <tr>{{panggil nama}}</tr>
              <tr>{{panggil email}}</tr>
              <tr>{{panggil new pesan}}</tr>
            </td>
          </th>
        </table>
        <div class="content wrap mb-4">
          <div class="card-content">
            
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
    import "datatables.net-dt/js/dataTables.dataTables"
    import "datatables.net-dt/css/jquery.dataTables.min.css"
    export default {
      name: 'History',
      mounted() {
        $('#dataTable').DataTable();
      }
    }
  </script>
