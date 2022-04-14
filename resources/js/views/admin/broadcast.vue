  <template>
    <div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Creat Broadcast</h6>
        </div>
        <div class="card-body">
          <ul>id</ul>
          <ul>nama</ul>
          <ul>email</ul>
          <ul>pesan</ul>
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
