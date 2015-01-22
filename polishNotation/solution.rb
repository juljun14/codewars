OPERATIONS = ["+", "-", "*", "/"]

def calc(expr)
	return 0 if expr.empty?

	split_expr = expr.split(" ")
	answer     = []

	until split_expr.empty?
		answer << split_expr.slice!(0)
		if OPERATIONS.include?(answer[-1])
			operand = answer.slice!(-1)
			combine = answer.pop(2).map {|num| num.to_f}.reduce(operand)
			answer << combine
		end
	end

	answer.length == 1 ? answer[0] : answer[-1].to_f
end

p calc("") == 0
p calc("1 2 3") == 3
p calc("1 2 3.5") == 3.5
p calc("1 3 +") == 4
p calc("1 3 *") == 3
p calc("1 3 -") == -2
p calc("4 2 /") == 2
p calc("5 1 2 + 4 * + 3 -") == 14