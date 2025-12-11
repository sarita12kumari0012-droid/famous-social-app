import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://snlraphaioiotblfwawz.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjAwYWY2ZDhjLTY3ZTUtNGIyMi05Njk1LWZlZGNkNTlkZTZlYSJ9.eyJwcm9qZWN0SWQiOiJzbmxyYXBoYWlvaW90Ymxmd2F3eiIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzY1Mjk4NTE4LCJleHAiOjIwODA2NTg1MTgsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.uhuzUftlavVpHoEOvZEfK5ACwkkSaFezlrTgmwOA3l0';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };