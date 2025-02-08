# Use Nginx as a base image
FROM nginx:alpine

# Copy the frontend files into the Nginx default directory
COPY . /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

