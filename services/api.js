import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://prmkcjebnaijfcrnzjmn.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBybWtjamVibmFpamZjcm56am1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM5MDkxMDEsImV4cCI6MTk4OTQ4NTEwMX0.jmumEgw9MQTCodZA0U0-2jAmEgk7wxU2SqLEWmr-FDc',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBybWtjamVibmFpamZjcm56am1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM5MDkxMDEsImV4cCI6MTk4OTQ4NTEwMX0.jmumEgw9MQTCodZA0U0-2jAmEgk7wxU2SqLEWmr-FDc',
  },
});
