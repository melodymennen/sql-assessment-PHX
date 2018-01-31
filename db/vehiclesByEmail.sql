SELECT v.make, v.model, v.year
FROM vehicles v INNER JOIN users u
ON v.owner_id = u.id 
WHERE u.email = $1;