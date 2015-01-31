def compare(a,b)
	(score(a) <=> score(b)) == 1 ? a : b
end

def score(str)
	ans = []
	ans << str.scan("style").length
	ans << str.scan("#").length
	ans << str.scan(/[\:\.]/).length
	ans << str.split(" ").select {|str| str[0] =~ /[^\#\.\*]/}.length

	ans
end