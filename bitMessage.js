n = [...(+readline()).toString(2)].reverse()
m = {
	0: 'Send Message',
	1: 'Acknowledge',
	2: 'Receive Notification',
	3: 'Update Status',
}
b = 0
for (i = 0; i < n.length; i++)
	if (n[i] == 1) {
		print(m[i])
		b = 1
	}
if (!b) print('null')
