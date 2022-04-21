<template>
    <div>
        <!-- Page Heading -->
        <!-- DataTales Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Data Tables Transaksi</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>transaction_time</th>
                                <th>amount</th>
                                <th>fee</th>
                                <th>account_number</th>
                                <th>no_resi</th>
                                <th>user_uid</th>
                                <th>card_no</th>
                                <th>batch_no</th>
                                <th>appr_code</th>
                                <th>cust_name</th>
                                <th>receipt</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>id</th>
                                <th>transaction_time</th>
                                <th>amount</th>
                                <th>fee</th>
                                <th>account_number</th>
                                <th>no_resi</th>
                                <th>user_uid</th>
                                <th>card_no</th>
                                <th>batch_no</th>
                                <th>appr_code</th>
                                <th>cust_name</th>
                                <th>receipt</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                                <td>1080</td>
                                <td>2021-01-20 04:00:27</td>
                                <td>50000</td>
                                <td>2500</td>
                                <td>GV24778851611114861</td>
                                <td>444654638</td>
                                <td>339</td>
                                <td>34023253148</td>
                                <td>PLNPRAH50</td>
                                <td>BLP</td>
                                <td>DUMMY PLNPRABAYAR</td>
                                <td>PIN Yang Anda Masukkan Salah</td>
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
        name: 'Transaksi',
        mounted() {
            $('#dataTable').DataTable();
        }
    }
</script>
