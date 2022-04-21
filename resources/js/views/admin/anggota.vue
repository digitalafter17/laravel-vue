<template>
    <div>
        <!-- Page Heading -->
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
                            <tr>
                                <td>32464</td>
                                <td>name</td>
                                <td>namedomain</td>
                                <td>namedomain@gmail.com</td>
                                <td>0000000000</td>
                                <td>Y</td>
                                <td>Y</td>
                                <td>Y</td>
                            </tr>
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
