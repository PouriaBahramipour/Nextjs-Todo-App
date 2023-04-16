import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://tcyniijfosqdrusmxahq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjeW5paWpmb3NxZHJ1c214YWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE2MjExMTgsImV4cCI6MTk5NzE5NzExOH0.EgDccyyuzI0Tq-8iNCzvHyYsxQyNFaTQ5jDVV6_bf60"
);
