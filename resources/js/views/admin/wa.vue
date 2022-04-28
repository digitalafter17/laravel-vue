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
      
      {
        "object": "whatsapp_business_account",
        "entry": [
          {
            "id": "WHATSAPP_BUSINESS_ACCOUNT_ID",
            "changes": [
              {
                "value": {
                  "messaging_product": "whatsapp",
                  "metadata": {
                    "display_phone_number": "16315551234",
                    "phone_number_id": "PHONE_NUMBER_ID"
                  },
                  "contacts": [
                    {
                      "profile": {
                        "name": "Actionpay"
                      },
                      "wa_id": "16315555555"
                    }
                  ],
                  "messages": [
                    {
                      "from": "16315555555",
                      "id": "wamid.ABGGFlA5FpafAgo6tHcNmNjXmuSf",
                      "timestamp": "1602139392",
                      "text": {
                        "body": "$body"
                      },
                      "type": "text"
                      }
                  ]
                },
              "field": "messages"
              }
            ]
          }
        ]
      }
      
      curl -X  POST \
      'https://graph.facebook.com/v13.0/FROM_PHONE_NUMBER_ID/messages' \
      -H 'Authorization: Bearer SYSTEM_USER_ACCESS_TOKEN' \
      -d '{
          "messaging_product": "Actionpay", 
          "to": "$telepon_hp_nomor",
          "text": {"$body" : "$pesan"}
      }'
    }
  </script>
</template>
