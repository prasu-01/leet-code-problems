SELECT c.id, c.name, COUNT(DISTINCT s.company) AS num_companies
FROM candidates c
JOIN reports r ON c.id = r.candidate_id
WHERE s.company IN (
    SELECT company
    FROM reports
    GROUP BY company
)
GROUP BY c.id, c.name
ORDER BY c.id;