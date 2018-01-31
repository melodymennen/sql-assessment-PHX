SELECT v.* FROM vehicles v
JOIN users u ON v.owner_id = u.id
WHERE u.name LIKE $1;