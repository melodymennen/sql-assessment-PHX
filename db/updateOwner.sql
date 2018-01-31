UPDATE vehicles 
SET owner_ID = $1 
WHERE id = $2
RETURNING *;