import { createClient } from '@supabase/supabase-js';
import { Database } from '@/supabase/types'



export const supabase = createClient<Database>(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_Service_Role,
    // import.meta.env.VITE_SUPABASE_KEY
);


