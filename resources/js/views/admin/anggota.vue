<template>
    <div>
        <!-- Page Heading -->
        <!-- DataTales Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Data Tables Anggota</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Full Name</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Handphone</th>
                                <th>No Identitas</th>
                                <th>Alamat</th>
                                <th>Nama Ibu</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>User ID</th>
                                <th>Full Name</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Handphone</th>
                                <th>No Identitas</th>
                                <th>Alamat</th>
                                <th>Nama Ibu</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            
                        <!-- <script type="text/javascript">
                                $(function () {
                                
                                var table = $('.actionpay-datatable').DataTable({
                                    processing: true,
                                    serverSide: true,
                                    ajax: "{{ route('user.index') }}",
                                    columns: [
                                        {data: 'DT_RowIndex', name: 'DT_RowIndex'},
                                        {data: 'id', name: 'id'},
                                        {data: 'full_name', name: 'ful_name'},
                                        {data: 'username', name: 'username'},
                                        {data: 'email', name: 'email'},
                                        {data: 'phone_number', name: 'phone_number'},
                                        {data: 'identity_no', name: 'identity_no'},
                                        {data: 'address', name: 'address'},
                                        {data: 'mother_name', name: 'mother_name'},
                                        {
                                            data: 'action', 
                                            name: 'action', 
                                            orderable: true, 
                                            searchable: true
                                        },
                                    ]
                                });
                                
                                });
                        </script> -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import "datatables.net-dt/js/dataTables.dataTables"
    import "datatables.net-dt/css/jquery.dataTables.min.css"
    export default {
        name: 'Anggota',
        mounted() {
            $('#dataTable').DataTable();
        }
    }
</script>