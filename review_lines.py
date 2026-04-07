from pathlib import Path 
lines = Path('src/pages/student/Review.tsx').read_text().splitlines() 
for idx,line in enumerate(lines,1): 
